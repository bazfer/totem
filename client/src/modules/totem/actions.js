import axios from 'axios';
import { browserHistory } from 'react-router';
import {  ADD_BLOCK } from './action_types';

const ROOT_URL = 'http://localhost:3090';

export const AddBlock = () => {
  return function(dispatch, getState) {
    let active_totem = getState().menu.active_totem;
    axios.post(`${ROOT_URL}/insert_block`, {active_totem}, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      // repack as needed
      const repack = response.data.totems[response.data.recent_totem]
      
      const addData = {
        totems: response.data.totems,
        blocks: repack.blocks
      }
      // dispatch
      dispatch({type: ADD_BLOCK, payload: addData});
      // redirect browser
      browserHistory.push('/app')
    })
    .catch(error => {
      console.log(error)
    });
  }
}