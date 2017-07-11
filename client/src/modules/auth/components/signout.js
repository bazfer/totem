import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../../header'

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>
        <Header />
        Leaving already?
      </div>
    )
  }
}

export default connect(null, actions)(Signout);