import React,{useEffect} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import {setUiLayout} from '../../redux/actions/ui-actions'
import { connect } from 'react-redux';

/*----------------------------------Container------------------------------ */
import HomeContainer from './HomeContainer'
import RatesContainer from './RatesContainer'
import AppNavContainer from './AppNavContainer'
import FooterContainer from './FooterContainer'

const App= ({setUiLayout})=>{
    /* this function affects the ui state to know if we must render mobile-view components*/
    setUiLayout(window.innerWidth,window.innerHeight)

    /* catch resizing for displaying right ui*/
    useEffect(
        ()=>{
            const listener=(e)=>setUiLayout(e.target.innerWidth,e.target.innerHeight)
            
            window.addEventListener('resize',listener)
            return ()=>window.removeEventListener('resize',listener)
        }
    )
    return (
        <>
            <AppNavContainer/>
            <Switch>
                <Route path="/home" exact component={HomeContainer}/>
                <Route path="/rates" exact component={RatesContainer}/>
                <Redirect from="/" to="/home"/>
            </Switch>
            <FooterContainer/>
        </>
    )
}

const mapDispatchToProps=(dispatch,ownProps)=>({
    setUiLayout:(width,height)=>dispatch(setUiLayout(width,height))
})
export default connect(null,mapDispatchToProps)(App)