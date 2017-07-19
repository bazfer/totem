import React from 'react'
import PropTypes from 'prop-types'

const TotemBlock = ({ notes }) => {
  return (
    <li className='block'>
      {notes}
    </li>
  )
}

TotemBlock.propTypes = {
  notes: PropTypes.string.isRequired
}

export default TotemBlock
