import axios from 'axios';
import { browserHistory } from 'react-router';
import {  FETCH_APP_DATA,
          FETCH_USER_DATA,
          ADD_TOTEM, 
          ADD_TOTEM_ERROR,
          CHANGE_ACTIVE_TOTEM,
          TEST_TWO_ROUTES
} from './action_types';

const ROOT_URL = 'http://localhost:3090';

export function fetchAllData() {
  return function(dispatch, getState) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        // model and deliver app data
        const appData = {
          totems: response.data.totems,
          active_totem: response.data.recent_totem,
        } 
        dispatch({ type: FETCH_APP_DATA, payload: appData })

        // model and deliver user data
        const userData = {
          user_name: response.data.user_name,
          email: response.data.email
        }
        
        dispatch({ type: FETCH_USER_DATA, payload: userData })
      });
  }
}

export function addTotem({ title }) {
  return function(dispatch) {
    // submit new totem to the server
    axios.post(`${ROOT_URL}/insert_totem`, { title }, { 
            headers: { authorization: localStorage.getItem('token')}
          }) 
      .then(response => {
        const addData = {
          totems: response.data.totems,
          active_totem: response.data.recent_totem
        }
        dispatch({ type: ADD_TOTEM, payload: addData });
        // display newly create totem - use browserHistory.push
        browserHistory.push('/app');
      })
      // handle errors
      .catch(error => {
        console.log(error);
        dispatch(addTotemError(error.response.data.error));
      });
  }
}

export function addTotemError(error) {
  return {
    type: ADD_TOTEM_ERROR,
    payload: error
  }
}

export const changeActiveTotem = (id) => ({
  type: CHANGE_ACTIVE_TOTEM,
  payload: id
})