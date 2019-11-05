import {
    CREATE_CUSTOM_RATE,
    CLEAR_CUSTOM_RATE,
    SUCCESS_ON_CREATE_CUSTOM_RATE,
    ERROR_ON_CREATE_CUSTOM_RATE
    } from '../constants';
    
const defaultState={
    data:{},
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case CREATE_CUSTOM_RATE:
            return Object.assign({},state,{loading:true,error:{}});
        case CLEAR_CUSTOM_RATE:
            return Object.assign({},state,{data:{},error:{}});
        case SUCCESS_ON_CREATE_CUSTOM_RATE:
            return Object.assign({},state,{loading:false,error:{},data:action.data});
        case ERROR_ON_CREATE_CUSTOM_RATE:
            return Object.assign({},state,{loading:false,error:action.data});
        default:
            return Object.assign({},state);
    } 
}