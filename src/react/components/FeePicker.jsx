import React from 'react'
import PropTypes from 'prop-types'
import {FlexDiv,
     FormLabel,
     FormInput,
     FeeSelector} from './StoryBook'

/*Part of Create component */

const FeePicker=({label,feeTypes,inputName,selectName})=>(
    <FormLabel>{label}
         <FlexDiv>
         <FormInput name={inputName} />
         <FeeSelector name={selectName} >
            {feeTypes.map(type=>(
                <option key={type.value}
                value={type.value}>
                {type.text}
                </option>
            ))}
         </FeeSelector>
         </FlexDiv>
    </FormLabel>
)

FeePicker.propTypes={
    label:PropTypes.string,
    feeTypes:PropTypes.array,
    inputName:PropTypes.string,
    selectName:PropTypes.string
}

export default FeePicker
