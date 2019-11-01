import React,{useEffect} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {setUiLayout} from '../../redux/actions/ui-actions'
import { connect } from 'react-redux';

import HomeContainer from './HomeContainer'

const App= ({setUiLayout})=>{
    /* this function affects the ui state to know if we must render mobile-view components*/
    setUiLayout(window.innerWidth)

    /* catch resizing for displaying right ui*/
    useEffect(
        ()=>{
            const listener=(e)=>setUiLayout(e.target.innerWidth)
            window.addEventListener('resize',listener)
            return ()=>window.removeEventListener('resize',listener)
        }
    )
    return (
        <>
            <Switch>
                <Route path="/home" exact component={HomeContainer}/>
                <Redirect from="/" to="/home"/>
            </Switch>
        </>
    )
}

const mapDispatchToProps=(dispatch,ownProps)=>({
    setUiLayout:(width)=>dispatch(setUiLayout(width))
})
export default connect(null,mapDispatchToProps)(App)