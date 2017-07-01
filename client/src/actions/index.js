import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_USER_DATA } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser( { email, password }) {
  return function(dispatch) {
  // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // if request is good
        
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // dispatch({ type: FETCH_USER_DATA , payload: response });
        // - put user data in state
        
        // - save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/app'
        browserHistory.push('/app');
      })
      .catch(() => {
        // if request is bad
        // - show an error to the user
        dispatch(authError('Bad login info'));
      });
    }
}

export function signupUser({ userName, email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { userName, email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        // dispatch({ type: FETCH_USER_DATA , payload: response });
        // - put user data in state
        
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/app');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function fetchUserData() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_USER_DATA,
          payload: response
        });
      });
  }
}
