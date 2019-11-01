import { 
    UI_SET_MOBILE,
    UI_CLEAR_MOBILE
} from '../constants';


const setMobile=(data)=>({
      type:UI_SET_MOBILE,
      data
      })
const clearMobile=(data)=>({
      type:UI_CLEAR_MOBILE,
      data
      })

    
export const setUiLayout=(width)=>dispatch=>{
          width<=600?
          dispatch(setMobile(true))
          :
          dispatch(clearMobile(false))             
          }