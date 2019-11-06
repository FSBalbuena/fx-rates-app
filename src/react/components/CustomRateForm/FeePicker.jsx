import React from 'react'
import PropTypes from 'prop-types'
import {FeeWrapper,
     FormLabel,
     FormInput,
     FeeSelector} from './components'
import OptionList from '../OptionList';

/*Part of Create component */

const FeePicker=({label,feeTypes,inputName,selectName})=>(
    <FormLabel>{label}
         <FeeWrapper>
         <FormInput name={inputName} />
         <FeeSelector name={selectName} >
            <OptionList options={feeTypes}/>
         </FeeSelector>
         </FeeWrapper>
    </FormLabel>
)

FeePicker.propTypes={
    label:PropTypes.string,
    feeTypes:PropTypes.array,
    inputName:PropTypes.string,
    selectName:PropTypes.string
}

export default FeePicker
