import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardTitle} from './StoryBook'

/*Part of Rates component */
const RatesCard=({title,children})=>(
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            {children}
        </Card>
    )

RatesCard.propTypes={
    title:PropTypes.string
}
RatesCard.defaultProps={
    title:"USD/ARS"
}
export default RatesCard