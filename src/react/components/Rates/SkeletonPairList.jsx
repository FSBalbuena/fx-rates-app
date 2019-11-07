import React from 'react'
import PropTypes from 'prop-types'
import {CardText,CardList} from '../Cards'
import RatesCard from '../Cards/RatesCard'

    
const SkeletonPairList=({cards,text})=>{
    const examples=new Array(cards).fill(1)
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
    cards:PropTypes.number,
    text:PropTypes.string
}
SkeletonPairList.defaultProps={
    cards:3,
    text:"********"
}
export default SkeletonPairList
