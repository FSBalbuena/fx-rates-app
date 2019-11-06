import React from 'react'
import PropTypes from 'prop-types'
import {Background,
     FormBox,
      FormButton,
      Rate} from './StoryBook'
import FeePicker from './FeePicker';
import CurrencySelector from './CurrencySelector';


const styles=isDesktop=>({
    background:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:isDesktop?"6vh 0px":"16vw 0px"
    }
})

const Create=({isDesktop})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg={"#4E42E2"} style={classes.background}>
           <FormBox>
               <CurrencySelector 
               name="base"
               label="Base currency"
               options={["USD","EUR"]}
               />
               <CurrencySelector 
               name="destination"
               label="Destination currency"
               options={["USD","EUR"]}
               />
               <Rate>USD/ARS : 64.00</Rate>
               <FeePicker
               label={"Fee"}
               inputName={"fee.value"}
               selectName={"fee.type"}
               feeTypes={[{value:"amount",text:"$"}
               ,{value:"percent",text:"%"}]}
               />
               <FormButton >
                   Create
              </FormButton>
           </FormBox>
        </Background>
    )
}
Create.propTypes={
    isDesktop:PropTypes.bool
}
Create.defaultProps={
    isDesktop:false
}
export default Create