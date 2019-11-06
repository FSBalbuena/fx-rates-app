import React from 'react';
import { connect } from 'react-redux';

import CustomRateForm from '../components/CustomRateForm'

const CustomRateContainer= ({isDesktop})=>{
    
    return <CustomRateForm isDesktop={isDesktop}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop
})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomRateContainer)