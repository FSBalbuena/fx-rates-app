import React from 'react'
import PropTypes from 'prop-types'
import {FormLabel,FormSelect} from './components'
import OptionList from '../OptionList';

/*Part of Create component*/
const CurrencySelector=({label,name,options})=>( 
            <FormLabel>{label}
                <FormSelect name={name}>
                    <OptionList options={options}/>
                </FormSelect>
            </FormLabel>)

CurrencySelector.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    options:PropTypes.array
}


export default CurrencySelector