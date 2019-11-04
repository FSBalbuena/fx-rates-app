import React from 'react'
import PropTypes from 'prop-types'
import {Background,Header} from './StoryBook'
import CurrencySelector from './CurrencySelector'
import SkeletonPairList from './skeleton/SkeletonPairList'
import RatesPairList from './RatesPairList'

const styles=isDesktop=>({
    background:{
        display:"flex",
        justifyContent:isDesktop?"space-around":"flex-start",
        padding:isDesktop?"20vh 0px":"16vw 0px",
        alignItems:"center",
        flexDirection:"column"
    },
    selector:{
        margin:isDesktop?"0px":"3.12vw"
    }
})

const RatesComponent=({symbols,isDesktop,handleChange,pairs,loading})=>{
    const classes=styles(isDesktop)
    return (
        <Background bg={"#4E42E2"} style={classes.background}>
            {isDesktop && 
            <Header textAlign="center">
                Select a currency
            </Header>}
            <CurrencySelector style={classes.selector}
            name="base"
             options={symbols}
             onChange={handleChange}/>
             {loading?
             <SkeletonPairList />
             :
             <RatesPairList pairs={pairs}/>}
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