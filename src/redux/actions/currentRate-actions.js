import { 
    FETCH_CURRENT_RATE,
    CLEAR_CURRENT_RATE,
    SUCCESS_ON_FETCH_CURRENT_RATE,
    ERROR_ON_FETCH_CURRENT_RATE } from '../constants';
  import axios from 'axios'
   
    const setCurrentRate=(data)=>({
          type:SUCCESS_ON_FETCH_CURRENT_RATE,
          data
          })
    const setCurrentRateError=(data)=>({
          type:ERROR_ON_FETCH_CURRENT_RATE,
          data
          })
    const onFetchingCurrentRate=()=>({
          type:FETCH_CURRENT_RATE
          })
  
  
        
export const fetchCurrentRate=(base)=>dispatch=>{
        dispatch(onFetchingCurrentRate())
        return axios.get(`api/rates/${base}`)
        .then(res=>res.data)
        .then(data=>dispatch(setCurrentRate(data.data)))
        .catch(err=>dispatch(setCurrentRateError(err)))
      }
              