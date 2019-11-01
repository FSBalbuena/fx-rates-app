import {
    CONSTANT
    } from '../constants';
    
const defaultState={
    data:{},
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case CONSTANT:
            return Object.assign({},state,{data:action.data});
        default:
            return Object.assign({},state);
    } 
}