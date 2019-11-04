import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchSymbols} from '../../redux/actions/symbols-actions'
import RatesComponent from '../components/Rates'
import _ from 'lodash'
const RatesContainer= ({fetchSymbols,isDesktop,symbols})=>{
    useEffect(
        ()=>{
            symbols.data.length || fetchSymbols()
        }
    )
    const handleChange=(e)=>console.log(e.target.value)
    
    const data={
        symbols:symbols.data,
        isDesktop,
        handleChange
        
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
    isDesktop:state.ui.isDesktop,
    symbols:state.symbols
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    fetchSymbols:()=>dispatch(fetchSymbols())
})

export default connect(mapStateToProps,mapDispatchToProps)(RatesContainer)