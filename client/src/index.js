import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import Site from './modules/site';
import Signin from './modules/auth/components/signin';
import Signout from './modules/auth/components/signout';
import Signup from './modules/auth/components/signup';
import App from './modules/app/app';
import RequireAuth from './modules/auth/components/require_auth';
import Landing from './modules/landing';
import TotemView from './modules/app/components/totem_view';

import rootReducer from './root_reducer';
import { AUTH_USER } from './modules/auth/action_types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Site}>
        
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/app" component={RequireAuth(App)} />
        <Route path="/app/totems/:id" component={RequireAuth(App)} />

      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
