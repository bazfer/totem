import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

import { addTotem } from '../actions';

class AddTotemController extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.addTotem(props)
      // .then(() => {
      //   this.context.router.push('/app');
      // })
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
    errors.title = 'The Title of a Totem cannot be Nothing'
  }
  return errors;
}

export default reduxForm({
  form: 'NavAddForm',
  fields: ['title'],
  validate
}, null, { addTotem })(AddTotemController);