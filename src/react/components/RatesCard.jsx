import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardTitle} from './StoryBook'


const RatesComponent=({title,children})=>(
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            {children}
        </Card>
    )

RatesComponent.propTypes={
    title:PropTypes.string
}
RatesComponent.defaultProps={
    title:"USD/ARS"
}
export default RatesComponent