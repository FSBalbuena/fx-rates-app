import { 
  FETCH_SYMBOLS,
  SUCCESS_ON_FETCH_SYMBOLS,
  ERROR_ON_FETCH_SYMBOLS } from '../constants';
import axios from 'axios'
 
  const setSymbols=(data)=>({
        type:SUCCESS_ON_FETCH_SYMBOLS,
        data
        })
  const setSymbolError=(data)=>({
        type:ERROR_ON_FETCH_SYMBOLS,
        data
        })
  const onFetchingSymbols=()=>({
        type:FETCH_SYMBOLS
        })


      
export const fetchSymbols=()=>dispatch=>{
      dispatch(onFetchingSymbols())
      return axios.get('api/rates')
      .then(res=>res.data)
      .then(data=>dispatch(setSymbols(data.symbols)))
      .catch(err=>dispatch(setSymbolError(err)))
    }
            