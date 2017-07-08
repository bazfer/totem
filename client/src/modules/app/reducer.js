import {  FETCH_USER_DATA, 
          ADD_TOTEM, 
          ADD_TOTEM_ERROR, 
          CHANGE_ACTIVE_TOTEM
} from './action_types';

const INITIAL_STATE = {
  user_name: '',
  totems: new Array,
  active_totem: new Number,
  totem: {}
  // ticking: new Boolean
}

export default function(state = INITIAL_STATE, action) {
  
  switch(action.type) {
    case FETCH_USER_DATA:
      return { ...state, 
                  user_name: action.payload.data.user_name,
                  totems: action.payload.data.totems,
                  active_totem: action.payload.data.recent_totem
                  // ticking:
      };
    case ADD_TOTEM:
      return { ...state, 
                  totems: action.payload.data.totems,
                  active_totem: action.payload.data.recent_totem,
    }
    case ADD_TOTEM_ERROR:
      return { ...state, error: 'FILL HERE'}
    case CHANGE_ACTIVE_TOTEM:
      return { ...state,
                  active_totem: action.payload
      }
    default:
      return state;
  }
}