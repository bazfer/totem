import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import MenuTotem from './menu_totem'

const MenuList = ({ totems, onTotemClick, activeTotem, userName }) => { 
  return(
    <div>
      <div>
        Hello Totem
        {userName}
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </div>
      <ul>
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
  activeTotem: PropTypes.number.isRequired
};

export default MenuList;