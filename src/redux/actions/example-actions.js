import { CONSTANT } from '../constants';
import axios from 'axios'
 
  const exampleDispatched=(data)=>({
        type:CONSTANT,
        data
        })


      
export const exampleAction=()=>dispatch=>{
            dispatch(exampleDispatched())           
            }