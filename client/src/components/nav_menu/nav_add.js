import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

class NavAdd extends Component {
  render() {
    return (

    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title'
  }
  return errors;
}

export default reduxForm({
  form: 'NavAddForm',
  fields: ['title'],
  validate
}, null, { createTotem })(NavAdd);