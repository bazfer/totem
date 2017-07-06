import {  FETCH_USER_DATA, 
          ADD_TOTEM, 
          ADD_TOTEM_ERROR 

} from './action_types';

const INITIAL_STATE = {
  user_name: '',
  totems: new Array,
  active_totem: new Number,
  // ticking: new Boolean
}

export default function(state = INITIAL_STATE, action) {
  
  switch(action.type) {
    case FETCH_USER_DATA:
          console.log(action.payload);

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
    default:
      return state;
  }
}