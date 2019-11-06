import {
    FETCH_RATES,
    CLEAR_RATES,
    SUCCESS_ON_FETCH_RATES,
    ERROR_ON_FETCH_RATES
    } from '../constants';
    
const defaultState={
    data:[],
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case FETCH_RATES:
            return Object.assign({},state,{loading:true,error:{}});
        case CLEAR_RATES:
            return Object.assign({},state,{data:[],error:{}});
        case SUCCESS_ON_FETCH_RATES:
            return Object.assign({},state,{loading:false,error:{},data:action.data});
        case ERROR_ON_FETCH_RATES:
            return Object.assign({},state,{loading:false,error:action.data});
        default:
            return Object.assign({},state);
    } 
}