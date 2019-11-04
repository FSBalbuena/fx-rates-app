import {
    FETCH_CURRENT_RATE,
    CLEAR_CURRENT_RATE,
    SUCCESS_ON_FETCH_CURRENT_RATE,
    ERROR_ON_FETCH_CURRENT_RATE
    } from '../constants';
    
const defaultState={
    data:[],
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case FETCH_CURRENT_RATE:
            return Object.assign({},state,{loading:true,error:{}});
        case CLEAR_CURRENT_RATE:
            return Object.assign({},state,{data:[],error:{}});
        case SUCCESS_ON_FETCH_CURRENT_RATE:
            return Object.assign({},state,{loading:false,error:{},data:action.data});
        case ERROR_ON_FETCH_CURRENT_RATE:
            return Object.assign({},state,{loading:false,error:action.data});
        default:
            return Object.assign({},state);
    } 
}