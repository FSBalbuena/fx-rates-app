import React from 'react'
import PropTypes from 'prop-types'
import {CardText,CardList} from './StoryBook'
import RatesCard from './RatesCard'


/*Part of Rates component */
const RatesPairList=({pairs})=>{
    return (
    <CardList>
    {pairs.map(pair=>(
        <RatesCard title={pair.name} key={pair.name}>
            {pair.rates.map(rate=>(
                <CardText key={rate.name}>
                {`${rate.name}:${rate.rate}`}
                </CardText>
            ))}
         </RatesCard>
    ))}
    </CardList>
    )
}

RatesPairList.propTypes={
    pairs:PropTypes.array
}
RatesPairList.defaultProps={
    pairs:[]
}
export default RatesPairList
