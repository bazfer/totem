import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    
    return (
      <div>hello</div>
    );
  }
}

function mapStateToProps(state) {
  
  return {
    authenticated: state.auth.authenticated,
    user: state.user
  };

  
}

export default connect(mapStateToProps)(NavList)