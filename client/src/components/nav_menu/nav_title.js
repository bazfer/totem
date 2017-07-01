import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchUserData } from '../../actions';

class NavTitle extends Component {

  componentDidMount() {
    this.props.fetchUserData();
  }

  renderTitle() {
    if (this.props.authenticated && this.props.user) {
      return( 
        <div className="nav-item">
          {this.props.user.user_name}
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </div>
      );
    }
  }

  render() {
    
    return (
      <nav className="navbar navbar-light">
        {this.renderTitle()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  
  return {
    authenticated: state.auth.authenticated,
    user: state.app.user
  };
}

export default connect(mapStateToProps, { fetchUserData })(NavTitle);