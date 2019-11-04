import React from 'react'
import {FormSelect} from './StoryBook'
import PropTypes from 'prop-types'

const CurrencySelector=({name,onChange,options,placeholder})=>(
    <FormSelect name={name} onChange={onChange} defaultValue={""}>
        <option value="" disabled hidden>{placeholder}</option>
       {options.map( symbol=>(
        <option 
           key={symbol} 
           value={symbol}>
            {symbol}
        </option>
       ))}
    </FormSelect>
)

CurrencySelector.propTypes={
    name:PropTypes.string,
    placeholder:PropTypes.string,
    onChange:PropTypes.func,
    options:PropTypes.array
}
CurrencySelector.defaultProps={
    name:"base",
    placeholder:"Choose",
    onChange:()=>console.log("change on CurrencySelector"),
    options:[]

}
export default CurrencySelector
