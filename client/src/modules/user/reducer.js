import {  FETCH_USER_DATA
} from '../menu/action_types'

const INITIAL_STATE = {
  user_name: '',
  email: ''
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER_DATA:
      return { ...state,
                  user_name: action.payload.user_name,
                  email: action.payload.email             
      }
    default:
      return state
  }
}