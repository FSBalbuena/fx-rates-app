import React ,{useEffect}from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import {Redirect} from 'react-router-dom'
import {clearCustomRate} from '../../redux/actions/customRate-actions'
import CustomRate from '../components/CustomRate'

const CustomRateContainer= ({
    clearCustomRate,
    customRate})=>{
        useEffect(
            /*Return a function that clears de data when unMount */
            ()=>()=>clearCustomRate()
            ,[]
        )
    return customRate.loading?
            <CustomRate {...customRate}/>
            :
             _.isEmpty(customRate.data) ||
            !_.isEmpty(customRate.error)?
            <Redirect to="/create"/>
            :<CustomRate {...customRate}/>
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
   customRate:state.customRate,
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    clearCustomRate:()=>dispatch(clearCustomRate())
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomRateContainer)