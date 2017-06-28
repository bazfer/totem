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
  // console.log(state.app.data);
  return {
    data: state.app.data
  };
}

export default connect(mapStateToProps)(NavList)