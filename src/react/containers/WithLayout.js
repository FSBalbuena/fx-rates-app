import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
    isDesktop:state.ui.isDesktop
})

const withLayout=(element)=>connect(mapStateToProps)(element)

export default withLayout