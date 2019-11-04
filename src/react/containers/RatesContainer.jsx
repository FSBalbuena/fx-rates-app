import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchSymbols} from '../../redux/actions/symbols-actions'
import {fetchCurrentRate} from '../../redux/actions/currentRate-actions'
import RatesComponent from '../components/Rates'
import _ from 'lodash'
const RatesContainer= ({fetchSymbols,fetchCurrentRate,currentRate,ui,symbols})=>{
    useEffect(
        ()=>{
            _.isEmpty(symbols.data)?
            fetchSymbols():
            fetchCurrentRate(symbols.data[0])
        },[symbols.data]
    )
    const handleChange=(e)=>fetchCurrentRate(e.target.value)
    
    const data={
        symbols:symbols.data,
        isDesktop:ui.isDesktop,
        loading:ui.loading,
        handleChange,
        pairs:currentRate.data
        
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
    ui:state.ui,
    symbols:state.symbols,
    currentRate:state.currentRate
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    fetchSymbols:()=>dispatch(fetchSymbols()),
    fetchCurrentRate:(base)=>dispatch(fetchCurrentRate(base))
})

export default connect(mapStateToProps,mapDispatchToProps)(RatesContainer)