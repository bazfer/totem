import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import NavTitle from './components/nav_title';
import NavList from './components/nav_list';
import NavSearch from './components/nav_search';
import NavAdd from './components/nav_add';
import TotemView from './components/totem_view';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUserData();
  }

  handleTotemTabClick(i) {
    // e.preventDefault();
    console.log('got it!');
    console.log(i);
    console.log(this);
    // this.props.changeActiveTotem(i);
  }

  render() {
    // if (this.props.authenticated && this.props.user_name) {
      return (
        <div>
          <nav className="navbar navbar-light">
            <NavTitle user_name = {this.props.user_name} />
            <NavAdd />
            <NavList totems = {this.props.totems} 
                     active_totem = {this.props.active_totem}
                     onChange = {this.handleTotemTabClick} 
            />
            <TotemView />
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