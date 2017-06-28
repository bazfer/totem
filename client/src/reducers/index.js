import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import appReducer from './app_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  app: appReducer
});

export default rootReducer;
