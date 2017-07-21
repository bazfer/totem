import axios from 'axios';
import { browserHistory } from 'react-router';
import {  FETCH_APP_DATA,
          FETCH_USER_DATA,
          ADD_TOTEM, 
          ADD_TOTEM_ERROR,
          CHANGE_ACTIVE_TOTEM,
          DELETE_TOTEM
} from './action_types';

import { ADD_BLOCK } from '../totem/action_types'

const ROOT_URL = 'http://localhost:3090';

export function fetchAllData() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        // repackage totem data
        const repack = response.data.totems[response.data.recent_totem]
        // model and deliver app data
        const appData = {
          // to menu reducer
          totems: response.data.totems,
          active_totem: response.data.recent_totem,
          // to totem reducer
          title: repack.title,
          blocks: repack.blocks 
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

// MENU MENU MENU

export function addTotem({ title }) {
  return function(dispatch) {
    // submit new totem to the server
    axios.post(`${ROOT_URL}/insert_totem`, { title }, { 
            headers: { authorization: localStorage.getItem('token')}
          }) 
      .then(response => {
        // repackaging
        const repack = response.data.totems[response.data.recent_totem]
        const addData = {
          // to menu reducer
          totems: response.data.totems,
          active_totem: response.data.recent_totem,
          // to totem reducer
          title: repack.title,
          blocks: repack.blocks 
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

// export const changeActiveTotem = (id) => {
//   return {
//     // used by both menu and totem reducers
//     type: CHANGE_ACTIVE_TOTEM,
//     payload: id
//   }
// }

export const changeActiveTotem = (id) => {
  return function(dispatch, getState) {
    const changeData = {
      active_totem: id,
      title: getState().menu.totems[id].title,
      blocks: getState().menu.totems[id].blocks
    }

    dispatch({type: CHANGE_ACTIVE_TOTEM, payload: changeData}) 
  }
}

export const deleteTotem = (id) => {
  return function(dispatch) {
    axios.delete(`${ROOT_URL}/delete_totem`, {
      data: { id },
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      const repack = response.data.totems[response.data.recent_totem]
      const deleteData = {
        // to menu reducer
        totems: response.data.totems,
        active_totem: response.data.recent_totem,
        // to totem reducer
        title: repack.title,
        blocks: repack.blocks 
      }
      dispatch({type: DELETE_TOTEM, payload: deleteData});
      browserHistory.push('/app')
    })
    .catch(error => {
      console.log(error)
    });
  }
}

// TOTEM TOTEM TOTEM

// export const AddBlock = () => {
//   return function(dispatch, getState) {
//     let active_totem = getState().menu.active_totem;
//     axios.post(`${ROOT_URL}/insert_block`, {active_totem}, {
//       headers: { authorization: localStorage.getItem('token')}
//     })
//     .then(response => {
//       console.log(response)
//       // repack as needed
//       const repack = response.data.totems[response.data.recent_totem]
//       const totem = {
//         title: repack.title,
//         blocks: repack.blocks
//       }
//       const addData = {
//         totems: response.data.totems,
//         totem
//       }
//       // dispatch
//       dispatch({type: ADD_BLOCK, payload: addData});
//       // redirect browser
//       browserHistory.push('/app')
//     })
//     .catch(error => {
//       console.log(error)
//     });
//   }
// }



