import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './modules/auth/reducer';
import appReducer from './modules/menu/reducer';
import userReducer from './modules/user/reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  user: userReducer,
  app: appReducer
  
});

export default rootReducer;
