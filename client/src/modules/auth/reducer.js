import {  AUTH_USER, 
          UNAUTH_USER, 
          AUTH_ERROR,
       } from './action_types';

// action comes from parent module App
import { TEST_TWO_ROUTES } from '../app/action_types'

// export default function(state = INITIAL_STATE, action) {
export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER: 
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case TEST_TWO_ROUTES:
      return {...state, test: action.payload}
    default:
      return state;
  }
}