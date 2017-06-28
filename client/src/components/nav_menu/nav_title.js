import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavTitle extends Component {


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
  console.log(state.app.data);
  return {
    authenticated: state.auth.authenticated,
    data: state.app.data
  };
}

export default connect(mapStateToProps)(NavTitle);