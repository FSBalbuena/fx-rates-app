import { 
    UI_SET_DESKTOP,
    UI_CLEAR_DESKTOP
} from '../constants';


const setDesktop=(data)=>({
      type:UI_SET_DESKTOP,
      data
      })
const clearDesktop=(data)=>({
      type:UI_CLEAR_DESKTOP,
      data
      })

    
export const setUiLayout=(width,height)=>dispatch=>{
          height<width?
          dispatch(setDesktop(true))
          :
          dispatch(clearDesktop(false))             
          }