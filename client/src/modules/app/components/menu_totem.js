import React from 'react'
import PropTypes from 'prop-types'

const MenuTotem = ({ onTotemClick, onDeleteClick, title, active }) => {
  return (
    <li
      onClick={onTotemClick} 
      className={active ? "active-item" : "item"}
    >
      {title}
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
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default MenuTotem
