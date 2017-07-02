import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { addTotem } from '../actions';

class NavAdd extends Component {
  onSubmit(props) {
    // console.log(this.props);
    this.props.addTotem(props);
  }

  render() {
    const { fields: { title }, handleSubmit } = this.props;
    return (
      <form className='nav-menu add-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <label>title</label>
        <input type='text' className='form-control' {...title} />
        <div className='text-help'>
            { title.touched ? title.error : null }
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
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
}, null, { addTotem })(NavAdd);