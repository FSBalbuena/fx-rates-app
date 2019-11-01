import React,{useEffect} from 'react';
import { connect } from 'react-redux';

/*generally containers dispatch actions*/
import {exampleAction} from '../../redux/actions/example-actions'
import ExampleComponent from '../components/ExampleComponent'

const ExampleContainer= ({exampleAction,isMobile})=>{
    useEffect(
        ()=>{
            exampleAction()
        }
    )
    return <ExampleComponent/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isMobile:state.ui.isMobile
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    exampleAction:()=>dispatch(exampleAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(ExampleContainer)