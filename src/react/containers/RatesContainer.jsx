import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchSymbols} from '../../redux/actions/symbols-actions'
import {fetchRates} from '../../redux/actions/rates-actions'
import RatesComponent from '../components/Rates/'
import _ from 'lodash'
const RatesContainer= ({fetchSymbols,fetchRates,rates,loading,symbols})=>{
    useEffect(
        ()=>{
            _.isEmpty(symbols.data)?
            fetchSymbols():
            fetchRates(symbols.data[0])
        },[symbols.data]
    )
    const handleChange=(e)=>fetchRates(e.target.value)
    
    const data={
        options:symbols.data.map(symbol=>({value:symbol,content:symbol})),
        loading,
        loadingSymbols:symbols.loading,
        error:!(_.isEmpty(symbols.error) && _.isEmpty(rates.error)),
        handleChange,
        pairs:rates.data,
        text:{
            title:"Select a currency",
            error:"Something Happend"
        }
        
    }
    return <RatesComponent {...data}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    loading:state.ui.loading,
    symbols:state.symbols,
    rates:state.rates
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    fetchSymbols:()=>dispatch(fetchSymbols()),
    fetchRates:(base)=>dispatch(fetchRates(base))
})

export default connect(mapStateToProps,mapDispatchToProps)(RatesContainer)