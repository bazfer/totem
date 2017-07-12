import React from 'react'
import PropTypes from 'prop-types'

const MenuTotem = ({ onClick, title, active }) => {
  return ( 
    <li
      onClick={onClick} 
      className={active ? "active-item" : "item"}
    >
      {title}
    </li>
  )
}

MenuTotem.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default MenuTotem
