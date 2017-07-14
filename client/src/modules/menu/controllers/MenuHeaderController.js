import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// assets
const signoutIcon = '../../../../assets/bt-signout.svg';

class MenuHeaderController extends Component {
  render() {
    return (
      <div className='header'>
        <div className='user-name'>
          {this.props.userName}
        </div>
        <Link to="/signout" className="bt">
          <i className='medium material-icons'>input</i>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { userName: state.user.user_name}
}

export default connect(mapStateToProps)(MenuHeaderController)