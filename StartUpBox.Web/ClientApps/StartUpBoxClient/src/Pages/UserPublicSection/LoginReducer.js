import {BaseReducer,initialState} from '../../base/BaseReducer'


export function loginReducer(state=initialState,action)
{

   
        var obj=BaseReducer(state,action);
    
         if(action.type.indexOf('FETCH_SUCCESS_')>-1)
         {
            

                if(action.recievedData.hasOwnProperty('error'))
                 {

                  return {
                     ...state,
                     error:action.recievedData.error,
                       
                    }


                 }

            return {
             ...state,
             error:null,
                token:obj.records.token
            }

         }
         return state;


}

export default loginReducer;