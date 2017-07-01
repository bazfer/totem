import axios from 'axios';
import { browserHistory } from 'react-router';
import { ADD_TOTEM } from './action_types';

const ROOT_URL = 'http://localhost:3090';


export function addTotem({ title }) {
  const id = '59578cc7b0d42e00a895a8f0';
  return function(dispatch) {
    // submit new totem to the server
    axios.post(`${ROOT_URL}/insert_totem`, { id, title}, { 
            headers: { authorization: localStorage.getItem('token')}
          }) 
            
      .then(response => {
        // update state
        dispatch({ 
          type: ADD_TOTEM,
          payload: response
       });
        // save most recent totem to localStorage
        // localStorage.setItem('recent_totem', );
        // display newly create totem - use browserHistory.push
        browserHistory.push('app/totem/:');
      })
      
      // handle errors
  }
}

// export function addTotem({ title }) {
//   const id = '59578cc7b0d42e00a895a8f0';
//   return function(dispatch) {
//     // submit new totem to the server
//     axios.post(`${ROOT_URL}/insert_totem`, { id, title }) 
//       .then(response => {
//         // update state
//         dispatch({ 
//           type: ADD_TOTEM,
//           payload: response
//        });
//         // save most recent totem to localStorage
//         // localStorage.setItem('recent_totem', );
//         // display newly create totem - use browserHistory.push
//         // browserHistory.push('app/totem/:');
//       })
      
//       // handle errors
//   }
// }