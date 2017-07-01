import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class NavList extends Component {
  constructor(props){
		super(props);
	}

  

  renderTabs() {
    return this.props.user.totems.map((totem, i) => {
      return(
        <li className='nav-menu totem-tab' key={i}>
          {totem.title}
        </li>
      )
    });
  }

  render() {
    return (
      <div className='nav-menu list-container'>
        <ul>{this.renderTabs()}</ul>
        <NavAdd/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.app.user
  };
}

export default connect(mapStateToProps)(NavList)