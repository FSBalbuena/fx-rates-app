import React from 'react'
import PropTypes from 'prop-types'
import {RateProperty,CustomWrapper,Divider} from './components'
import RatesCard from '../Cards/RatesCard'
import _ from 'lodash'
const NewRateCard=({data})=>(
            _.isEmpty(data)?
            null:<RatesCard title={data.name}>
                    <CustomWrapper>
                    <RateProperty>{`Rate:${data.rate}`}</RateProperty>
                    <RateProperty textAlign="right">{`New Rate:${data.newRate}`}</RateProperty>
                    </CustomWrapper>
                    <Divider/>
                    <CustomWrapper>
                    <RateProperty>{`Fee % :${data.fee.percent}`}</RateProperty>
                    <RateProperty textAlign="right">{`Fee $: ${data.fee.amount}`}</RateProperty>
                    </CustomWrapper>
                </RatesCard>
    )

NewRateCard.propTypes={
    options:PropTypes.array,
    data:PropTypes.object,
    loading:PropTypes.bool,

}
NewRateCard.defaultProps={
    data:{}
}
export default NewRateCard

