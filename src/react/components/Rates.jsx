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

const RatesComponent=({symbols,isDesktop,handleChange,pairs,loading})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg={"#4E42E2"} style={classes.background}>
            <CurrencySelector name="base"
             options={symbols} 
             placeholder={'Choose currency'}
             onChange={handleChange}/>
             {loading?"...Loading":pairs.map(pair=>(
                <RatesCard title={pair.name} key={pair.name}>
                    {pair.rates.map(rate=>(
                        <Text style={classes.rateText} key={rate.name}>
                        {`${rate.name}:${rate.rate}`}
                        </Text>
                    ))}
                 </RatesCard>
             ))}
            
           
        </Background>
    )
}
RatesComponent.propTypes={
    symbols:PropTypes.array,
    isDesktop:PropTypes.bool,
    handleChange:PropTypes.func,
    pairs:PropTypes.array,
    loading:PropTypes.bool,

}
RatesComponent.defaultProps={
    symbols:[],
    isDesktop:false,
    handleChange:()=>console.log("changes on rates"),
    pairs:[],
    loading:true
}
export default RatesComponent