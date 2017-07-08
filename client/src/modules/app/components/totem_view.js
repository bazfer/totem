import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const viewStyle = {
  marginLeft: '800px'
}

class TotemView extends Component {
  render() {
    if(this.props.totem){
      return (
        <div style={viewStyle}>{this.props.totem.title}</div>
      );
    } else {
      return(
        <div style={viewStyle}>Loading</div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    totem: state.app.totems[state.app.active_totem],
  };
}

export default connect(mapStateToProps, actions)(TotemView);