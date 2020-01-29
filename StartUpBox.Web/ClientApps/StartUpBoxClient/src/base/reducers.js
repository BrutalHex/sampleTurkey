import { combineReducers } from 'redux'
import loginReducer from  '../Pages/UserPublicSection/LoginReducer'
import BaseReducer from  '../base/BaseReducer'



const rootReducer = combineReducers({
   base: BaseReducer,login : loginReducer
    
  })
  export default rootReducer