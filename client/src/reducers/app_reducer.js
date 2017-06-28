import { LOAD_USER_DATA } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case LOAD_USER_DATA:
      return { ...state, data: action.payload };
  }

  return state;
}

