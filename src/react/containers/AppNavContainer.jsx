import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import AppNav from '../components/AppNav'
/*generally containers dispatch actions*/

const NavbarContainer= ({location,isDesktop})=>{
    let isHome=location.pathname==="/home"
    let color=isHome?"#FFFFFF":null
    
    const data={
        background:isHome?"transparent":null,
        links:[
            {text:"Rates",props:{color,to:"/rates"}},
            {text:"Create rate",props:{color,to:"/create"}
        }]
    }
    
    return <AppNav {...data}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop,
    location:ownProps.location

})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarContainer))