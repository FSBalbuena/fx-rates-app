import React from 'react'
import PropTypes from 'prop-types'
import { Rate} from './components'

/*Part of CreateRateForm */

const RatePreview=({rate})=>(
                    <Rate>{_.isEmpty(rate)?"***/***:****"
                    :`${rate[0].name}:${rate[0].rate}`}</Rate>
    )

RatePreview.propTypes={
    rate:PropTypes.array
}
RatePreview.defaultProps={
    rate:[]
}
export default RatePreview