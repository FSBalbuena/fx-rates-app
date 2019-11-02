import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import RatesComponent from '../components/Rates'

const ExampleContainer= ({isDesktop})=>{
    
    return <RatesComponent isDesktop={isDesktop}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop
})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)