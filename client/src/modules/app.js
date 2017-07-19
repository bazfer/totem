import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './menu/actions';

import Menu from './menu/components/menu'
import Header from './header'
import Totem from './totem/components/totem'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div className='app'>
          <Menu />
          <Totem />   
        </div>
      );
    } 
    // NEED TO ADD REDIRECTING IF NOT LOGGED IN
  }
}

function mapStateToProps(state) {
  return { 
    authenticated: state.auth.authenticated,
    totems: state.app.totems,
    active_totem: state.app.active_totem
  };
}

export default connect(mapStateToProps, actions)(App);