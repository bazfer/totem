import axios from 'axios';
import { browserHistory } from 'react-router';
import {  FETCH_USER_DATA ,
          ADD_TOTEM, 
          ADD_TOTEM_ERROR,
          CHANGE_ACTIVE_TOTEM
} from './action_types';

const ROOT_URL = 'http://localhost:3090';

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

export function addTotem({ title }) {
  return function(dispatch) {
    // submit new totem to the server
    axios.post(`${ROOT_URL}/insert_totem`, { title }, { 
            headers: { authorization: localStorage.getItem('token')}
          }) 
      .then(response => {
        // update state
        dispatch({ 
          type: ADD_TOTEM,
          payload: response
       });
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

export function changeActiveTotem(i){
  return {
    type: CHANGE_ACTIVE_TOTEM,
    payload: i
  }
}