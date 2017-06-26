import { AUTH_USER, 
        UNAUTH_USER, 
        AUTH_ERROR, 
        LOAD_USER_DATA } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER: 
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case LOAD_USER_DATA:
      return { ...state, data: action.payload };
  }

  return state;
}