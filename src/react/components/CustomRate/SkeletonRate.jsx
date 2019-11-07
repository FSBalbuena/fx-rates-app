import React from 'react'
import PropTypes from 'prop-types'
import RatesCard from '../Cards/RatesCard'
import {RateProperty,CustomWrapper} from './components'

    
const SkeletonRate=({text})=>(
            <RatesCard title={text}>
                <CustomWrapper>
                <RateProperty >{text}</RateProperty>
                <RateProperty textAlign="right">{text}</RateProperty>
                </CustomWrapper>
                <CustomWrapper>
                <RateProperty >{text}</RateProperty>
                <RateProperty textAlign="right" >{text}</RateProperty>
                </CustomWrapper>
             </RatesCard>
        )

SkeletonRate.propTypes={
    text:PropTypes.string
}
SkeletonRate.defaultProps={
    text:"*******"
}
export default SkeletonRate
