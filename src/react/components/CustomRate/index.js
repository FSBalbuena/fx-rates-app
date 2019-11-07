import React from 'react'
import PropTypes from 'prop-types'
import {RatesBackground,Title} from './components'
import SkeletonRate from './SkeletonRate'
import NewRateCard from './NewRateCard'

const CustomRateComponent=({data,loading})=>(
        <RatesBackground >
            <Title>{`New ${data.name || "Rate"}`}</Title>
             {loading?
             <SkeletonRate/>
             :<NewRateCard data={data}/>}
        </RatesBackground>
    )

CustomRateComponent.propTypes={
    options:PropTypes.array,
    data:PropTypes.object,
    loading:PropTypes.bool,

}
CustomRateComponent.defaultProps={
    title:"Title",
    data:{},
    loading:true
}
export default CustomRateComponent