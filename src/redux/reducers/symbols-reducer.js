import {
FETCH_SYMBOLS,
CLEAR_SYMBOLS,
SUCCESS_ON_FETCH_SYMBOLS,
ERROR_ON_FETCH_SYMBOLS
    } from '../constants';
    
const defaultState={
    data:[],
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case FETCH_SYMBOLS:
            return Object.assign({},state,{loading:true,error:{}});
        case CLEAR_SYMBOLS:
            return Object.assign({},state,{data:[],error:{}});
        case SUCCESS_ON_FETCH_SYMBOLS:
            return Object.assign({},state,{loading:false,error:{},data:action.data});
        case ERROR_ON_FETCH_SYMBOLS:
            return Object.assign({},state,{loading:false,error:action.data});
        default:
            return Object.assign({},state);
    } 
}