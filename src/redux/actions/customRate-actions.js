import { 
  CREATE_CUSTOM_RATE,
  CLEAR_CUSTOM_RATE,
  SUCCESS_ON_CREATE_CUSTOM_RATE,
  ERROR_ON_CREATE_CUSTOM_RATE } from '../constants';

import axios from 'axios'
 
  const setCustomRate=(data)=>({
        type:SUCCESS_ON_CREATE_CUSTOM_RATE,
        data
        })

  const setCustomRateError=(data)=>({
        type:ERROR_ON_CREATE_CUSTOM_RATE,
        data
        })

  const onCreatingCustomRate=()=>({
        type:CREATE_CUSTOM_RATE
        })
  const onClearingCustomRate=()=>({
        type:CLEAR_CUSTOM_RATE
        })


      
export const createCustomRate=(body)=>dispatch=>{
      dispatch(onCreatingCustomRate())
      return axios.post(`api/rates/custom-rate`,body)
      .then(res=>res.data)
      .then(data=>dispatch(setCustomRate(data.rates)))
      .catch(err=>dispatch(setCustomRateError(err)))
    }

export const clearCustomRate=()=>dispatch=>{
      dispatch(onClearingCustomRate())
    }
            