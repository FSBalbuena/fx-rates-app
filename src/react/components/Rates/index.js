import React from 'react'
import PropTypes from 'prop-types'
import {RatesBackground,Selector, Title} from './components'
import SkeletonPairList from './SkeletonPairList'
import RatesPairList from '../Cards/RatesPairList'
import OptionList from '../OptionList';
import {Error} from '../StoryBook'

const RatesComponent=({options,text,handleChange,pairs,loading,error})=>(
        <RatesBackground >
            <Title>{text.title}</Title>
            {error?
            <Error>{text.error}</Error>
            :<>
                <Selector name="base"
                    onChange={handleChange}>
                   <OptionList options={options}/>
                </Selector>
                {loading?
                <SkeletonPairList />
                :
                <RatesPairList pairs={pairs}/>
                }
             </>}
        </RatesBackground>
    )

RatesComponent.propTypes={
    options:PropTypes.array,
    text:PropTypes.object,
    handleChange:PropTypes.func,
    pairs:PropTypes.array,
    loading:PropTypes.bool,
    error:PropTypes.bool,

}
RatesComponent.defaultProps={
    options:[],
    pairs:[],
    loading:true,
    error:false
}
export default RatesComponent