import React from 'react'
import PropTypes from 'prop-types'
import {Background,
     FormBox,
      FormLabel,
      FormInput,
      FormButton,
      Rate,
      FormSelect} from './StoryBook'


const styles=isDesktop=>({
    background:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:isDesktop?"6vh 0px":"16vw 0px"
    },
    feeWrapper:{
        display:"flex",
        justifyItems:"center",
        alignItems:"center",
        width:"100%"        
    },
    feeSelector:{
        width:"30%",
        borderRadius:isDesktop?"0px 0.735vh 0.735vh 0px":"0px 1.56vw 1.56vw 0px"
    },
    feeInput:{
        width:"70%",
        borderRadius:isDesktop?"0.735vh 0px 0px 0.735vh":"1.56vw 0px 0px 1.56vw"
    }
})

const RatesComponent=({isDesktop})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg={"#4E42E2"} style={classes.background}>
           <FormBox>
               {["base","destination"].map(symbol=>(
                   <FormLabel>Base Currency
                   <FormSelect name="symbol">
                   <option value="USD">USD</option>
                   <option value="ARS">ARS</option>
                   </FormSelect>
                  </FormLabel>
               ))}
               <Rate>USD/ARS : 64.00</Rate>
               <FormLabel>Base Currency
                <div style={classes.feeWrapper}>
                <FormInput style={classes.feeInput}/>
                <FormSelect style={classes.feeSelector}>
                    <option value="amount">$</option>
                    <option value="percent">%</option>
                </FormSelect>
                </div>
               </FormLabel>
               <FormButton >
                   Create
              </FormButton>
           </FormBox>
        </Background>
    )
}
RatesComponent.propTypes={
    isDesktop:PropTypes.bool
}
RatesComponent.defaultProps={
    isDesktop:false
}
export default RatesComponent