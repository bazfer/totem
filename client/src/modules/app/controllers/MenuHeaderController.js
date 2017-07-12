import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MenuHeaderController extends Component {
  render() {
    return (
      <div className='menu-header'>
        <div className='header-text'>
          {this.props.userName}
        </div>
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { userName: state.user.user_name}
}

export default connect(mapStateToProps)(MenuHeaderController)