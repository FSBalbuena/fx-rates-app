import { 
    FETCH_SINGLE_RATES_PAIR,
    CLEAR_SINGLE_RATES_PAIR,
    SUCCESS_ON_FETCH_SINGLE_RATES_PAIR,
    ERROR_ON_FETCH_SINGLE_RATES_PAIR } from '../constants';

import axios from 'axios'
   
    const setSingleRatesPair=(data)=>({
          type:SUCCESS_ON_FETCH_SINGLE_RATES_PAIR,
          data
          })

    const setSingleRatesPairError=(data)=>({
          type:ERROR_ON_FETCH_SINGLE_RATES_PAIR,
          data
          })

    const onFetchingSingleRatesPair=()=>({
          type:FETCH_SINGLE_RATES_PAIR
          })
  
  
        
export const fetchSingleRatesPair=(body)=>dispatch=>{
        dispatch(onFetchingSingleRatesPair())
        return axios.post(`api/rates`,body)
        .then(res=>res.data)
        .then(data=>dispatch(setSingleRatesPair(data.rates)))
        .catch(err=>dispatch(setSingleRatesPairError(err)))
      }
              