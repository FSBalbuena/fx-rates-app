import React from 'react'
import PropTypes from 'prop-types'
import {FeeWrapper,
     FormLabel,
     FormInput,
     FeeSelector} from './components'
import Error from './Error'
import OptionList from '../OptionList';
import { Field } from 'formik';

/*Part of Create component */

const FeePicker=({name,label,feeTypes})=>(
    <FormLabel>{label}
         <FeeWrapper>
        <Field name={`${name}.value`} type={"number"}>
        {({field})=><FormInput {...field}/>}
        </Field>
        <Field name={`${name}.type`}>
        {({field})=>(
        <FeeSelector {...field}>
            <OptionList options={feeTypes}/>
         </FeeSelector>)}
        </Field>
         </FeeWrapper>
        <Error name={`${name}.value`}/>
        <Error name={`${name}.type`}/>
    </FormLabel>
)

FeePicker.propTypes={
    label:PropTypes.string,
    feeTypes:PropTypes.array,
    inputName:PropTypes.string,
    selectName:PropTypes.string
}

export default FeePicker
