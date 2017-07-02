import {  AUTH_USER, 
          UNAUTH_USER, 
          AUTH_ERROR,
          FETCH_USER_DATA
       } from './action_types';

const INITIAL_STATE = { user: {
  _id: '',
  updatedAt: '',
  createdAt: '', 
  user_name: '',
  email: '',
  password: '',
  totems: []
} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER: 
      return { ...state, error: '', authenticated: true, application: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_USER_DATA:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}