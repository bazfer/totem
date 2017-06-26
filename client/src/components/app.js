import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NavMenu from './nav_menu/nav_menu';

class App extends Component {
  componentWillMount() {
    this.props.loadUserData();
  }

  render() {
    return (
      <div>
        <NavMenu/>
        {this.props.data}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(App);