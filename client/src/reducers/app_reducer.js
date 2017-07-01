import { FETCH_USER_DATA } from '../actions/types';

const INITIAL_STATE = { user: {
  _id: '',
  updatedAt: '',
  createdAt: '', 
  user_name: '',
  email: '',
  password: '',
  totems: []
} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USER_DATA:
      console.log('REDUCER ' + JSON.stringify(action.payload.data))
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}

