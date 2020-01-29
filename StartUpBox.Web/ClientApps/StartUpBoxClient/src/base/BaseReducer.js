 
import * as actions from './actionTypes';

export const initialState = {
    pending: false,
    records:null,
    token:null,
    error: null,
}

export function BaseReducer(state,action,entity)
{
    if(action==undefined)
    {
        return initialState;
    }
    switch(action.baseType) {
        case actions.fetchPendingType: 
            return {
                ...state,
                error:null,
                records:null,
                pending: true
            }
        case actions.fetchSuccessType:
            return {
                ...state,
                pending: false,
                records: action.recievedData
            }
        case actions.fetchErrorType:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return ()=> {  return { ...state}};
    }
}
export default BaseReducer;