import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const liStyle = {
  backgroundColor: 'green'
}

export default class NavList extends Component {
  constructor(props){
		super(props);
	}
  
  renderTabs() {
    return this.props.totems.map((totem, i) => {
      if(i === this.props.active_totem) {
        return (
          <li style={liStyle} 
              className='nav-menu totem-tab' 
              onClick={this.props.onChange(i)}
              key={i}>
                <Link to={'/app/totems/:' + i}>
                  <span className='pull-xs-right' id={i}>{totem.title}</span>
                  <span className='glyphicon glyphicon-menu-right'></span>
             
            </Link>
          </li>
        )
      } else {
        return(
          <li className='nav-menu totem-tab' key={i}>
            <Link to={'/app/totems/:' + i}>
              <button
                onClick={this.props.onChange(i)}
                className='btn'> 
                  <span className='pull-xs-right'>{totem.title}</span>
                  <span className='glyphicon glyphicon-menu-right'></span>
              </button>
            </Link>
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