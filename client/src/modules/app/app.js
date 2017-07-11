import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import Menu from './components/menu'
import Header from '../header'
import TotemView from './components/totem_view'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  render() {
    // if (this.props.authenticated) {
      return (
        <div>
          <nav className="navbar navbar-light">
            <Header />
            <Menu />
            <TotemView />
          </nav>
        </div>
      );
    // }
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