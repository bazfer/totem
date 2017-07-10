import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import NavTitle from './components/nav_title';
// import NavList from './components/nav_list';
// import NavSearch from './components/nav_search';
// import NavAdd from './components/nav_add';
// import TotemView from './components/totem_view';
import Menu from './components/menu'

import Header from '../header'

class App extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  render() {
    // if (this.props.authenticated && this.props.user_name) {
      return (
        <div>
          <nav className="navbar navbar-light">
            <Header />
            <Menu />
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