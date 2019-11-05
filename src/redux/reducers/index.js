import {combineReducers} from 'redux'
import uiReducer from './ui-reducer'
import symbolsReducer from './symbols-reducer'
import ratesReducer from './rates-reducer'

export default combineReducers({
    ui:uiReducer,
    symbols:symbolsReducer,
    rates:ratesReducer,
})