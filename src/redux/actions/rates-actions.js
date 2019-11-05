import { 
    FETCH_RATES,
    CLEAR_RATES,
    SUCCESS_ON_FETCH_RATES,
    ERROR_ON_FETCH_RATES } from '../constants';
  import axios from 'axios'
   
    const setRates=(data)=>({
          type:SUCCESS_ON_FETCH_RATES,
          data
          })
    const setRatesError=(data)=>({
          type:ERROR_ON_FETCH_RATES,
          data
          })
    const onFetchingRates=()=>({
          type:FETCH_RATES
          })
  
  
        
export const fetchRates=(base)=>dispatch=>{
        dispatch(onFetchingRates())
        return axios.get(`api/rates/${base}`)
        .then(res=>res.data)
        .then(data=>dispatch(setRates(data.data)))
        .catch(err=>dispatch(setRatesError(err)))
      }
              