import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import appReducer from './app_reducer';
import navMenuReducer from '../components/nav_menu/reducer.js';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  app: appReducer,
  nav_menu: navMenuReducer
});

export default rootReducer;
