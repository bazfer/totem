import { ADD_BLOCK, ADD_BLOCK_ERROR } from './action_types'

const INITIAL_STATE = {
  totem: new Array,
  isRunning: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_BLOCK:
      return {
        ...state, 
        totem: action.payload,
        isRunning: false
      }
    default:
    return state
  }
}


