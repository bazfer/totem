import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { addItem, changeActiveItem } from '../actions'

// helper
const validate = values => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Please enter a title for this item.'
  }
  return errors;
}

// helper
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>
)

// different scope/space
const AddTotemController = (props) => {
  const { handleSubmit, pristine, reset, submitting, dispatch } = props
  
  // receive the form data from handleSubmit
  // grab the onSubmit prop (which is the key to the addItem action)
  // and wrap it with dispatch so redux can send the action to the reducer
  const doSubmit = form => {
    dispatch(props.onSubmit(form));
  }

  return (
    // handleSubmit is provided by redux-form, allows you to pass the form data
    // to another function, in this case doSubmit 
    <form onSubmit={handleSubmit(doSubmit)}>
        <Field name='title' 
                type='text' 
                component={renderField} 
                label='title'
        />
        <button type='submit' 
                disabled={submitting} 
        >
          Submit
      </button>
    </form>
  )
}

// tunnel to reduxForm
export default reduxForm({
  form: 'AddTotemController',
  validate,
  onSubmit: addItem
})(AddTotemController);
// null because there is no prop maped to state
// addItem is an action