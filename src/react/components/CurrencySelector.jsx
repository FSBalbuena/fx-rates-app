import React from 'react'
import {FormSelect} from './StoryBook'
import PropTypes from 'prop-types'

const CurrencySelector=({name,onChange,options})=>(
    <FormSelect name={name} onChange={onChange}>
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
    onChange:PropTypes.func,
    options:PropTypes.array
}
CurrencySelector.defaultProps={
    name:"base",
    onChange:()=>console.log("change on CurrencySelector"),
    options:[]

}
export default CurrencySelector
