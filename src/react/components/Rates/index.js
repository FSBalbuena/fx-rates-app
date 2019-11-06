import React from 'react'
import PropTypes from 'prop-types'
import {RatesBackground,Selector, Title} from './components'
import SkeletonPairList from '../skeleton/SkeletonPairList'
import RatesPairList from '../Cards/RatesPairList'
import OptionList from '../OptionList';


const RatesComponent=({options,title,handleChange,pairs,loading})=>(
        <RatesBackground >
            <Title>{title}</Title>
            <Selector name="base"
            onChange={handleChange}>
               <OptionList options={options}/>
            </Selector>
             {loading?
             <SkeletonPairList />
             :
             <RatesPairList pairs={pairs}/>}
        </RatesBackground>
    )

RatesComponent.propTypes={
    options:PropTypes.array,
    title:PropTypes.string,
    handleChange:PropTypes.func,
    pairs:PropTypes.array,
    loading:PropTypes.bool,

}
RatesComponent.defaultProps={
    symbols:[],
    title:"Title",
    handleChange:()=>console.log("changes on rates"),
    pairs:[],
    loading:true
}
export default RatesComponent