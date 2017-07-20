import {  FETCH_APP_DATA, 
          ADD_TOTEM, 
          ADD_TOTEM_ERROR, 
          CHANGE_ACTIVE_TOTEM,
          DELETE_TOTEM,
          ADD_BLOCK
} from './action_types';

const INITIAL_STATE = {
  totems: new Array,
  active_totem: 0,
  isRunning: false,
  totem: {},
  
  // ticking: new Boolean
}

export default function(state = INITIAL_STATE, action) {
  
  switch(action.type) {
    case FETCH_APP_DATA:
      return { ...state, 
                  totems: action.payload.totems,
                  active_totem: action.payload.active_totem,
                  totem: action.payload.totem,

                  // ticking:
      };
    case ADD_TOTEM:
      return { ...state, 
                  totems: action.payload.totems,
                  active_totem: action.payload.active_totem,
                  totem: action.payload.totem
    }
    case ADD_TOTEM_ERROR:
      return { ...state, error: 'FILL HERE'}
    case CHANGE_ACTIVE_TOTEM:
      return { ...state,
                  active_totem: action.payload,
                  totem: {
                    title: state.totems[action.payload].title,
                    blocks: state.totems[action.payload].blocks
                  }
      }
    case DELETE_TOTEM:
      return { ...state,
                  totems: action.payload.totems,
                  active_totem: 0,
                  totem: action.payload.totems[0]
                }
    case ADD_BLOCK:
                console.log(action.payload)
      return { ...state,
                  totems: action.payload.totems,
                  totem: action.payload.totem
            }
    default:
      return state;
  }
}