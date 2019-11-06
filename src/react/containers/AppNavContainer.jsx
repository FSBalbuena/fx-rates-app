import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import AppNav from '../components/AppNav/'

const AppNavContainer= ({location})=>{
    let isHome=location.pathname==="/home"
    let color=isHome?"#FFFFFF":null

    const data={
        background:isHome?"transparent":null,
        links:[
            {text:"Rates",color,to:"/rates"},
            {text:"Create rate",color,to:"/create"}
        ],
        pathname:location.pathname
    }
    
    return <AppNav {...data}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    location:ownProps.location
})

export default withRouter(connect(mapStateToProps,null)(AppNavContainer))