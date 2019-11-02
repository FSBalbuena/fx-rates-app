import React,{useEffect} from 'react';
import { connect } from 'react-redux';

/*generally containers dispatch actions*/
import {exampleAction} from '../../redux/actions/example-actions'
import ExampleComponent from '../components/ExampleComponent'

const ExampleContainer= ({exampleAction,isDesktop})=>{
    useEffect(
        ()=>{
            exampleAction()
        }
    )
    return <ExampleComponent/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    exampleAction:()=>dispatch(exampleAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)