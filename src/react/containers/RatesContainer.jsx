import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import RatesComponent from '../components/Rates'

const ExampleContainer= ({exampleAction,isDesktop})=>{
    
    return <RatesComponent/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop
})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)