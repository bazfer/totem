import { ADD_BLOCK, ADD_BLOCK_ERROR } from './action_types'

export const addBlock = (id) => {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/add_block`, id, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      const addData = {
        blocks: response.data.blocks
      }
    })
    dispatch({ type: ADD_BLOCK, payload: addData });
    browserHistory.push('app');
  }
  .catch(error => {
    console.log(error);
  });
}

export function addBlockError(error) {
  return {
    type: ADD_BLOCK_ERROR,
    payload: error
  }
}