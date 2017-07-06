import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const liStyle = {
  backgroundColor: '#ccc'
}

export default class NavList extends Component {
  constructor(props){
		super(props);
	}
  
  renderTabs() {
    return this.props.totems.map((totem, i) => {
      if(i === this.props.active_totem) {
        return (
          <li style={liStyle} className='nav-menu totem-tab' key={i}>
            {totem.title}
          </li>
        )
      } else {
        return(
          <li className='nav-menu totem-tab' key={i}>
            {totem.title}
          </li>
        )
      }
    });
  }

  render() {
    return (
      <div className='nav-menu list-container'>
        <ul>{this.renderTabs()}</ul>
      </div>
    );
  }
}