import {combineReducers} from 'redux'
import uiReducer from './ui-reducer'
import symbolsReducer from './symbols-reducer'
import currentRateReducer from './currentRate-reducer'

export default combineReducers({
    ui:uiReducer,
    symbols:symbolsReducer,
    currentRate:currentRateReducer,
})