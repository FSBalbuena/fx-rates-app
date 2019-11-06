import React from 'react'
import PropTypes from 'prop-types'

const OptionList=({options})=>(
    <>{options.map( option=>(
        <option 
           key={option.value} 
           value={option.value}>
            {option.content}
        </option>
        ))}
   </>)

OptionList.propTypes={
    options:PropTypes.array
}
OptionList.defaultProps={
    options:[]
}
export default OptionList
