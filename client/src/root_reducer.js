import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './modules/auth/reducer';
import navMenuReducer from './modules/nav_menu/reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  app: authReducer,
  nav_menu: navMenuReducer
});

export default rootReducer;
