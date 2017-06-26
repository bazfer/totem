import React, { Component } from 'react';
import Header from './header';

export default class Site extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
