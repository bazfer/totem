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
    // currently happening sync, if there's an error
    // or if async action takes too long
    // clearing out the form will visibly happen before
    // totem creation and display
    // return a promise from addTotem to make the statement thenable
    this.props.resetForm()
  }

  render() {
    const { fields: { title }, handleSubmit } = this.props;
    return (
      <form className='menu-add-item' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/*<label className='input-label'>title</label>*/}
        <input placeholder='Create a Totem' type='text' className='input-field' {...title} />
        <div className='input-nudge'>
            { title.touched ? title.error : null }
        </div>
        <button type='submit' className='button-submit'>Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Please enter a title for this totem.'
  }
  return errors;
}

export default reduxForm({
  form: 'NavAddForm',
  fields: ['title'],
  validate
}, null, { addTotem })(AddTotemController);