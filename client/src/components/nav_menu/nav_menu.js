import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Nav Menu Components
import NavTitle from './nav_title';
import NavList from './nav_list';
import NavSearch from './nav_search';

export default class NavMenu extends Component {
  

  render() {
    return (
      <nav className="navbar navbar-light">
        <NavTitle/>
      </nav>
    );
  }
}
