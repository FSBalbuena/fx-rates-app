import React from 'react'
import PropTypes from 'prop-types'
import {CardText,CardList} from '../Cards'
import RatesCard from '../Cards/RatesCard'

    
const SkeletonPairList=({cards})=>{
    const examples=new Array(cards).fill(1)
    const text="********"
    return (
        <CardList>
        {examples.map((num,idx)=>(
            <RatesCard title={text} key={idx}>
                <CardText >
                    {text}
                </CardText>
                <CardText >
                    {text}
                </CardText>
             </RatesCard>
         ))}
        </CardList>
        )
}

SkeletonPairList.propTypes={
    cards:PropTypes.number
}
SkeletonPairList.defaultProps={
    cards:3
}
export default SkeletonPairList
