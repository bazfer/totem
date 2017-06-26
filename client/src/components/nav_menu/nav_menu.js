import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavMenu extends Component {
  renderLink() {
    if (this.props.authenticated) {
      // show a link to sign out
      return( 
        <div className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        {this.renderLink()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavMenu);