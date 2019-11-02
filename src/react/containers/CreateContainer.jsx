import React from 'react';
import { connect } from 'react-redux';

import CreateComponent from '../components/Create'

const ExampleContainer= ({isDesktop})=>{
    
    return <CreateComponent isDesktop={isDesktop}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop
})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)