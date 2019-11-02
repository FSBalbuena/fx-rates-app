import {
    UI_SET_ERRORS,
    UI_CLEAR_ERRORS,
    UI_LOADING,
    UI_STOP_LOADING,
    UI_SET_DESKTOP,
    UI_CLEAR_DESKTOP
    } from '../constants';
    
const defaultState={
    isDesktop:false,
    loading:false,
    error:{}
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case UI_SET_ERRORS:
            return Object.assign({},state,{error:action.data});
        case UI_CLEAR_ERRORS:
            return Object.assign({},state,{error:{}});
        case UI_LOADING:
            return Object.assign({},state,{loading:true});
        case UI_STOP_LOADING:
            return Object.assign({},state,{loading:false});
        case UI_SET_DESKTOP:
        case UI_CLEAR_DESKTOP:
            return Object.assign({},state,{isDesktop:action.data});
        default:
            return Object.assign({},state);
    } 
}