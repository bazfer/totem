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
        <div className='totem-view' style={viewStyle}>{this.props.totem.title}</div>
      );
    } else {
      return(
        <div style={viewStyle}>
          Go on, create your first Totem.
          {/*Here goes the blank slate totem view, encourage to start a totem*/}
        </div>
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