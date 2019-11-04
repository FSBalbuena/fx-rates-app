import React,{useEffect} from 'react';
import { connect } from 'react-redux';

//import {exampleAction} from '../../redux/actions/example-actions'
import Home from '../components/Home'

const ExampleContainer= ({isDesktop})=>{
  const data={
      text:{
          header:"Manage all the Foreign Exchanges in one place",
          button:"Start Free",
          href:"/rates"
      },
      isDesktop
  }
    return <Home {...data}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop
})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)