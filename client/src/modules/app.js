import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './app/actions';

import Menu from './menu/components/menu'
import Header from './header'
import Stack from './stack/components/stack'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div className='app'>
          <Menu />
          <Stack />
        </div>
      );
    } 
    // NEED TO ADD REDIRECTING IF NOT LOGGED IN
  }
}

function mapStateToProps(state) {
  return { 
    authenticated: state.auth.authenticated,
    user_name: state.app.user_name,
    totems: state.app.totems,
    active_totem: state.app.active_totem
  };
}

export default connect(mapStateToProps, actions)(App);