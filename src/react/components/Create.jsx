import React from 'react'
import PropTypes from 'prop-types'
import {Background, FormBox, FormLabel,FormInput,Text, FormButton} from './StoryBook'


const styles=isDesktop=>({
    background:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"16vw 0px"
    },
    rate:{
        color:"#4488FF",
        textAlign:"center",
        margin:"6.56vw 0px"
    }
    
})

const RatesComponent=({isDesktop})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg={"#4E42E2"} style={classes.background}>
           <FormBox>
               <FormLabel>Base Currency
                    <FormInput value={"USD"}/>
               </FormLabel>
               <FormLabel>Destination Currency
                    <FormInput value={"USD"}/>
               </FormLabel>
               <Text style={classes.rate}>USD/ARS : 64.00</Text>
               <FormLabel>Add Fee
                    <FormInput value={"USD"}/>
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