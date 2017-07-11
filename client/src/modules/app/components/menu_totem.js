import React from 'react'
import PropTypes from 'prop-types'

const activeStyle = {
  backgroundColor: '#5F9EA0'
}

const MenuTotem = ({ onClick, title, active }) => {
  return ( 
    <li
      onClick={onClick} 
      style={active ? activeStyle : null}
      className='menu-item'
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
