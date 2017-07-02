import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './auth/actions';

import NavMenu from './nav_menu/components/nav_menu';

class App extends Component {
  componentWillMount() {
    this.props.fetchUserData();
  }

  render() {
    
    return (
      <div>
        <NavMenu/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.app.user };
}

export default connect(mapStateToProps, actions)(App);