import {combineReducers} from 'redux'
import uiReducer from './ui-reducer'
import symbolsReducer from './symbols-reducer'
import ratesReducer from './rates-reducer'
import singleRatesPairReducer from './singleRatesPair-reducer'
import customRateReducer from './customRate-reducer'

export default combineReducers({
    ui:uiReducer,
    symbols:symbolsReducer,
    rates:ratesReducer,
    singleRatesPair:singleRatesPairReducer,
    customRate:customRateReducer
})