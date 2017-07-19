import axios from 'axios';
import { browserHistory } from 'react-router';
import {  FETCH_APP_DATA,
          FETCH_USER_DATA,
          ADD_TOTEM, 
          ADD_TOTEM_ERROR,
          CHANGE_ACTIVE_TOTEM,
          DELETE_TOTEM
} from './action_types';

const ROOT_URL = 'http://localhost:3090';

export function fetchAllData() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        // repackage totem data
        const repack = response.data.totems[response.data.recent_totem]
        const totem = { 
          title: repack.title, 
          blocks: repack.blocks,
        };
        
        // model and deliver app data
        const appData = {
          totems: response.data.totems,
          active_totem: response.data.recent_totem,
          totem: totem
        } 
        dispatch({ type: FETCH_APP_DATA, payload: appData })

        // model and deliver user data
        // perhaps there's a helper function to be written
        // find provided keys, return object with key-value pairs
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
        // repackaging
        
        const repack = response.data.totems[response.data.recent_totem]
        const totem = { 
          title: repack.title, 
          blocks: repack.blocks,
        };
        const addData = {
          totems: response.data.totems,
          active_totem: response.data.recent_totem,
          totem: totem
        }
        dispatch({ type: ADD_TOTEM, payload: addData });
        // display newly create totem - use browserHistory.push
        browserHistory.push('/app');
      })
      // handle errors
      .catch(error => {
        console.log(error);
        // dispatch(addTotemError(error.response.data.error));
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

export const deleteTotem = (id) => {
  return function(dispatch) {
    axios.delete(`${ROOT_URL}/delete_totem`, {
      data: { id },
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      const repack = response.data.totems[response.data.recent_totem]
      const totem = { 
        title: repack.title, 
        blocks: repack.blocks,
      };

      const deleteData = {
        totems: response.data.totems,
        active_totem: response.data.recent_totem,
        totem: totem
      }
      dispatch({type: DELETE_TOTEM, payload: deleteData});
      browserHistory.push('/app')
    })
    .catch(error => {
      console.log(error)
    });
  }
}

