import React from 'react'
import PropTypes from 'prop-types'
import {Background,Text} from './StoryBook'
import RatesCard from './RatesCard'
import CurrencySelector from './CurrencySelector'


const styles=isDesktop=>({
    background:{
        display:"flex",
        justifyContent:"flex-start",
        padding:"16vw",
        alignItems:"center",
        flexDirection:"column"
    },
    rateText:{
        color: "#848484",
        padding:"2.81vw 5.62vw",
        margin:"0px"
    }
})

const RatesComponent=({symbols,isDesktop,handleChange})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg={"#4E42E2"} style={classes.background}>
            <CurrencySelector name="base"
             options={symbols} 
             onChange={handleChange}/>
            <RatesCard>
                <Text style={classes.rateText}>USD/ARS: 0000.00</Text>
                <Text style={classes.rateText}>ARS/USD: 0000.00</Text>
            </RatesCard>
            <RatesCard>
                <Text style={classes.rateText}>USD/ARS: 0000.00</Text>
                <Text style={classes.rateText}>ARS/USD: 0000.00</Text>
            </RatesCard>
            <RatesCard>
                <Text style={classes.rateText}>USD/ARS: 0000.00</Text>
                <Text style={classes.rateText}>ARS/USD: 0000.00</Text>
            </RatesCard>
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