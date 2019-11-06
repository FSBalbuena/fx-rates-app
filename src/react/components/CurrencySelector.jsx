import React from 'react'
import {Selector} from './StoryBook'
import PropTypes from 'prop-types'

const CurrencySelector=({name,options,...rest})=>(
    <Selector name={name} {...rest}>
       {options.map( symbol=>(
        <option 
           key={symbol} 
           value={symbol}>
            {symbol}
        </option>
       ))}
    </Selector>
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
