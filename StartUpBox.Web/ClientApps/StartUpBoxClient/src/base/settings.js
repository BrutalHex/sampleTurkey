export const apiUrl='https://reqres.in/api/';

export function settings()
{
   const obj={
           mainUrl:apiUrl
         
    };

    return obj;
}


export function getApiUrl(address)
{
 
    return apiUrl+address;
}

export default settings;