import axios from 'axios';
import { browserHistory } from 'react-router';
import {  ADD_BLOCK, STOP_BLOCK } from './action_types';

const ROOT_URL = 'http://localhost:3090';

export const AddBlock = () => {
  return function(dispatch, getState) {
    var active_totem = getState().menu.active_totem;
    axios.post(`${ROOT_URL}/insert_block`, {active_totem}, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      // repack as needed
      const repack = response.data.totems[active_totem]
      // stopwatch start calcs
      var miliseconds = new Date() - new Date(response.data.createdAt)
      // var seconds = Math.floor(miliseconds/1000)
      // var hours = Math.floor(seconds/3600)
      // var remSeconds = seconds % 3600
      // var minutes = Math.floor(remSeconds/60)
      // seconds = remSeconds % 60

      // var time = hours + " : " + minutes + " : " + seconds
      console.log(response.data.createdAt)
      const addData = {
        isRunning: response.data.isRunning,
        totems: response.data.totems,
        blocks: repack.blocks,
        // stopwatch: time
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

export const StopBlock = () => {
  return function(dispatch, getState) {
    var active_totem = getState().menu.active_totem;
    axios.put(`${ROOT_URL}/stop_block`, {active_totem}, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      const repack = response.data.totems[active_totem]
      const stopData = {
        isRunning: response.data.isRunning,
        totems: response.data.totems,
        blocks: repack.blocks,
        
      }
      dispatch({type: STOP_BLOCK, payload: stopData})
      browserHistory.push('/app')
    })
    .catch(error => {
      console.log(error)
    });
  }
}

// export function tick() {
//   return {
//     type: TICK,
//     payload: true
//   }
// }