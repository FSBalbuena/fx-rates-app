import {
    FETCH_SINGLE_RATES_PAIR,
    CLEAR_SINGLE_RATES_PAIR,
    SUCCESS_ON_FETCH_SINGLE_RATES_PAIR,
    ERROR_ON_FETCH_SINGLE_RATES_PAIR
    } from '../constants';
    
const defaultState={
    data:[],
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case FETCH_SINGLE_RATES_PAIR:
            return Object.assign({},state,{loading:true,error:{}});
        case CLEAR_SINGLE_RATES_PAIR:
            return Object.assign({},state,{data:[],error:{}});
        case SUCCESS_ON_FETCH_SINGLE_RATES_PAIR:
            return Object.assign({},state,{loading:false,error:{},data:action.data});
        case ERROR_ON_FETCH_SINGLE_RATES_PAIR:
            return Object.assign({},state,{loading:false,error:action.data});
        default:
            return Object.assign({},state);
    } 
}