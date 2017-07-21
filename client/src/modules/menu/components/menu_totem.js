import React from 'react'
import PropTypes from 'prop-types'

const MenuTotem = ({ onTotemClick, onDeleteClick, tag, active }) => {
  return (
    <li
      onClick={onTotemClick} 
      className={active ? "active-item" : "item"}
    >
      {tag}
      <button
        onClick={onDeleteClick} 
        type='button' 
        className='bt'>
        <i className='medium material-icons'>
          play_arrow
        </i>
        </button>
    </li>
  )
}

MenuTotem.propTypes = {
  onTotemClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default MenuTotem
