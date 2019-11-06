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
        title:"Select a currency",
        loading,
        handleChange,
        pairs:rates.data
        
    }
    return symbols.loading?
    <h1>loading...</h1>
    :
    !_.isEmpty(symbols.error)?
    <h1>{symbols.error}</h1>
    :
    <RatesComponent {...data}/>
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