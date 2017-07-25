import {  FETCH_APP_DATA, 
          ADD_TOTEM, 
          ADD_TOTEM_ERROR, 
          CHANGE_ACTIVE_TOTEM,
          DELETE_TOTEM
} from '../menu/action_types'

import { ADD_BLOCK,
         STOP_BLOCK
} from './action_types'

const INITIAL_STATE = {
  isRunning: false,
  stopwatch: '',
  title: '',
  blocks: new Array
}

export default function(state = INITIAL_STATE, action) {
  
  switch(action.type) {
    case FETCH_APP_DATA:
      return { ...state,
                  title: action.payload.title, 
                  blocks: action.payload.blocks,
                  isRunning: action.payload.isRunning,
                  stopwatch: action.payload.stopwatch
      }
    case ADD_TOTEM:
      return { ...state,
                  title: action.payload.title, 
                  blocks: action.payload.blocks,
                  isRunning: action.payload.isRunning
      }
    case ADD_TOTEM_ERROR:
      return { ...state, 
                  error: 'FILL HERE'
      }
    case CHANGE_ACTIVE_TOTEM:
      return { ...state,
                  title: action.payload.title,
                  blocks: action.payload.blocks         
      }
    case DELETE_TOTEM:
      return { ...state,
        // load totem zero after delete
                  blocks: action.payload.totems[0].blocks
      }
    case ADD_BLOCK:
      return { ...state,
                  blocks: action.payload.blocks,
                  isRunning: true
      }
    case STOP_BLOCK:
      return { ...state,
                  isRunning: false            
      }
    default:
      return state;
  }
}