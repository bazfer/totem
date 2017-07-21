import {  FETCH_APP_DATA, 
          ADD_TOTEM, 
          ADD_TOTEM_ERROR, 
          CHANGE_ACTIVE_TOTEM,
          DELETE_TOTEM
} from './action_types'

import { ADD_BLOCK } from "../totem/action_types"

const INITIAL_STATE = {
  totems: new Array,
  active_totem: 0
}

export default function(state = INITIAL_STATE, action) {
  
  switch(action.type) {
    case FETCH_APP_DATA:
      return { ...state, 
                  totems: action.payload.totems,
                  active_totem: action.payload.active_totem
      };
    case ADD_TOTEM:
      return { ...state, 
                  totems: action.payload.totems,
                  active_totem: action.payload.active_totem
    }
    case ADD_TOTEM_ERROR:
      return { ...state, error: 'FILL HERE'}
    case CHANGE_ACTIVE_TOTEM:
      return { ...state,
                  active_totem: action.payload.active_totem
      }
    case DELETE_TOTEM:
      return { ...state,
                  totems: action.payload.totems,
                  active_totem: 0
                }
    case ADD_BLOCK:
      return { ...state,
                  totems: action.payload.totems 
            }
    default:
      return state;
  }
}