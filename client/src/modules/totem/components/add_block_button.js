import React from 'react'
import PropTypes from 'prop-types'

const AddBlockButton = ({onAddBlockClick}) => {
  return(
    <button
      onClick={onAddBlockClick}
      type='button'
    >
      Add
    </button>
  )
}

AddBlockButton.propTypes = {
  onAddBlockClick: PropTypes.func.isRequired 
}

export default AddBlockButton