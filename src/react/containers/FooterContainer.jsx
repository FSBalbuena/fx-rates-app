import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import FooterComponent from '../components/Footer/'

const FooterContainer= ({pathname})=>{
    const data={
        background:pathname==="/home"?"#272D3A":null,
        text:"Settle Currency Challenge"
    }
    
    return <FooterComponent {...data}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    pathname:ownProps.location.pathname
})

export default withRouter(connect(mapStateToProps,null)(FooterContainer))