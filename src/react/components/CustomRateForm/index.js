import React from 'react'
import PropTypes from 'prop-types'
import {FormBackground,
     FormBox,
      FormButton,
      Rate} from './components'
import FeePicker from './FeePicker';
import CurrencySelector from './CurrencySelector';


const CreateComponent=()=>(
        <FormBackground bg={"#4E42E2"} >
           <FormBox>
               <CurrencySelector 
               name="base"
               label="Base currency"
               options={[{value:"EUR",content:"EUR"},{value:"USD",content:"USD"}]}
               />
               <CurrencySelector 
               name="destination"
               label="Destination currency"
               options={[{value:"EUR",content:"EUR"},{value:"USD",content:"USD"}]}
               />
               <Rate>USD/ARS : 64.00</Rate>
               <FeePicker
               label={"Fee"}
               inputName={"fee.value"}
               selectName={"fee.type"}
               feeTypes={[{value:"amount",content:"$"}
               ,{value:"percent",content:"%"}]}
               />
               <FormButton >
                   Create
              </FormButton>
           </FormBox>
        </FormBackground>
    )

CreateComponent.propTypes={
    
}
CreateComponent.defaultProps={
    
}
export default CreateComponent