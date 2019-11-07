import React from 'react'
import PropTypes from 'prop-types'
import {FormLabel,FormSelect} from './components'
import OptionList from '../OptionList';
import { Field } from 'formik';

/*Part of Create component*/
const CurrencySelector=({name,label,options,handleChange})=>( 
            <FormLabel>{label}
                <Field name={name}>
                    {({field,form})=>(
                    <FormSelect {...field} onChange={handleChange}>
                        <OptionList options={options}/>
                    </FormSelect>
                    )}
                </Field>
            </FormLabel>)

CurrencySelector.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    options:PropTypes.array
}


export default CurrencySelector