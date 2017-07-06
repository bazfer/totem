import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './modules/auth/reducer';
import appReducer from './modules/app/reducer';


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  app: appReducer
});

export default rootReducer;
