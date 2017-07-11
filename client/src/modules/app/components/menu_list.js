import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import MenuTotem from './menu_totem'

const MenuList = ({ totems, onTotemClick, activeTotem, userName }) => { 
  return(
    <div className='menu-list'>
      <div className='menu-list-header'>
        <div className='header-text'>
          {userName}
        </div>
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </div>
      <ul className='menu-list-body'>
        {totems.map((totem) => 
          <MenuTotem 
            key={totem.id} 
            {...totem} 
            active={activeTotem == totem.id} 
            onClick={() => onTotemClick(totem.id)}
          />
        )}
      </ul>
    </div>
  )
}

MenuList.propTypes = {
  totems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTotemClick: PropTypes.func.isRequired,
  activeTotem: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
};

export default MenuList;