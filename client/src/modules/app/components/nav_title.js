import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class NavTitle extends Component {
  renderTitle() {
      return( 
        <div className="nav-item">
          Hello Totem
          {this.props.user_name}
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </div>
      );
    
  }

  render() {
    
    return (
      <nav className="navbar navbar-light">
        {this.renderTitle()}
      </nav>
    );
  }
}




