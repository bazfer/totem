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
          <div className='ghost-menu'/>
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
    totems: state.menu.totems,
    active_totem: state.menu.active_totem
  };
}

export default connect(mapStateToProps, actions)(App);