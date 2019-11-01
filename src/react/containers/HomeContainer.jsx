import React,{useEffect} from 'react';
import { connect } from 'react-redux';

//import {exampleAction} from '../../redux/actions/example-actions'
//import ExampleComponent from '../components/ExampleComponent'

const ExampleContainer= ({isMobile})=>{
  
    return <h1>HOME</h1>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isMobile:state.ui.isMobile
})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)