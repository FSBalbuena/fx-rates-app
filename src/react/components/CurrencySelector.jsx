import React from 'react'
import PropTypes from 'prop-types'
import {FormLabel,FormSelect} from './StoryBook'

/*Part of Create component*/
const CurrencySelector=({label,name,options})=>( 
            <FormLabel>{label}
                <FormSelect name={name}>
                    {options.map(option=>(
                        <option key={option}
                        value={option}
                        >
                        {option}
                        </option>
                    ))}
                </FormSelect>
            </FormLabel>)

CurrencySelector.propTypes={
    label:PropTypes.string,
    name:PropTypes.string,
    options:PropTypes.array
}


export default CurrencySelector