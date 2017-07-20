import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './modules/auth/reducer';
import menuReducer from './modules/menu/reducer';
import userReducer from './modules/user/reducer';
import totemReducer from './modules/totem/reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  user: userReducer,
  menu: menuReducer,
  totem: totemReducer
  
});

export default rootReducer;
