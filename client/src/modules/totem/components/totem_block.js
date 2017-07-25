import React from 'react'
import PropTypes from 'prop-types'

const TotemBlock = ({ notes, stopwatch }) => {
  return (
    <li className='block'>
      {stopwatch}
    </li>
  )
}

TotemBlock.propTypes = {
  notes: PropTypes.string.isRequired,
  stopwatch: PropTypes.string.isRequired
}

export default TotemBlock
