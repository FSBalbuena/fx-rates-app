import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Footer from '../components/FooterComponent'
/*generally containers dispatch actions*/

const FooterContainer= ({location,isDesktop})=>{
    const data={
        background:location.pathname==="/home"?"#272D3A":null,
        text:"Settle Currency Chalenge",
        isDesktop
    }
    
    return <Footer {...data}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isDesktop:state.ui.isDesktop,
    location:ownProps.location

})
const mapDispatchToProps=(dispatch,ownProps)=>({
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FooterContainer))