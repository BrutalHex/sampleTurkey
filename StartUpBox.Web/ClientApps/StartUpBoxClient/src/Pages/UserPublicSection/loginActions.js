
import {fetchApiPending,fetchApiSuccess,fetchApiError} from '../../base/BaseApiAction';
import {postData} from '../../base/fetchService';
import {getApiUrl} from '../../base/settings';

export const entity = 'Login';



  function performLogin(loginData) {
    
      let link=getApiUrl('login');

    return   dispatch =>  {
      
        dispatch(fetchApiPending(entity));

        postData(link,loginData,(recievedData)=> {
          
         dispatch(fetchApiSuccess(entity,recievedData));
        
        });
    

         
     
    }
}

export default performLogin;