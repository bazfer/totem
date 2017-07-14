import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

import { addTotem } from '../actions';

const addButton = '../../../../assets/bt-add.svg';

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
      <form className='footer' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/*<label className='input-label'>title</label>*/}
        <input placeholder='Create a Totem' type='text' className='input-totem' {...title} />
        <button type='submit' className='bt'>
          {/*<img src={addButton} />*/}
          <i className='material-icons'>add</i>
        </button>
        <div className='input-nudge'>
            { title.touched ? title.error : null }
        </div>
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