import { ADD_TOTEM } from './action_types';

const INITIAL_STATE = { totems: []}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TOTEM:
      return { ...state, totems: action.payload }
    default:
      return state;
  }
}