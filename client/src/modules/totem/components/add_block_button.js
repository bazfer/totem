import React from 'react'
import PropTypes from 'prop-types'

const AddBlockButton = ({ onAddBlockClick, 
                          onStopBlockClick, 
                          isRunning }) => 
{
  // if stopwatch is running
  if(isRunning){
    return(
      <button
      onClick={onStopBlockClick}
      type='button'
      className='stop-block'
    >
      Stop
    </button>
    ) 
  // if stopwatch is not running
  } else {
    return(
      <button
      onClick={onAddBlockClick}
      type='button'
      className='add-block'
    >
      Add
    </button>
    )
  }
}

AddBlockButton.propTypes = {
  onAddBlockClick: PropTypes.func.isRequired,
  onStopBlockClick: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired 
}

export default AddBlockButton