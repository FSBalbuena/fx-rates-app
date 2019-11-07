import React from 'react'
import PropTypes from 'prop-types'
import {ErrorMessage} from 'formik'
import {Error} from '../StoryBook'

const ErrorComponent=({name})=>(
    <ErrorMessage name={name}>
    {msg=>(
        <Error>{msg}</Error>
    )}
    </ErrorMessage>)

ErrorComponent.propTypes={
    name:PropTypes.string
}
ErrorComponent.defaultProps={
    name:""
}
export default ErrorComponent
