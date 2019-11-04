import {combineReducers} from 'redux'
import uiReducer from './ui-reducer'
import symbolsReducer from './symbols-reducer'

export default combineReducers({
    ui:uiReducer,
    symbols:symbolsReducer
})