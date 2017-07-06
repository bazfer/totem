import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import NavTitle from './components/nav_title';
import NavList from './components/nav_list';
import NavSearch from './components/nav_search';
import NavAdd from './components/nav_add';

class App extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    // if (this.props.authenticated && this.props.user) {
      return (
        <div>
          <nav className="navbar navbar-light">
            <NavTitle user_name = {this.props.user_name} />
            <NavAdd />
            <NavList totems = {this.props.totems} 
                     active_totem = {this.props.active_totem} 
            />
          </nav>
        </div>
      );
    // }
  }
}

function mapStateToProps(state) {
  return { 
    user_name: state.app.user_name,
    totems: state.app.totems,
    active_totem: state.app.active_totem
  };
}

export default connect(mapStateToProps, actions)(App);