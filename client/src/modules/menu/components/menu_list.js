import React from 'react'
import PropTypes from 'prop-types'

import MenuTotem from './menu_totem'

const MenuList = ({ 
  totems, 
  onTotemClick,
  onDeleteClick, 
  activeTotem, 
  userName }) => {
    return(
      <div className='body'>
        <ul>
          {totems.slice(0).reverse().map((totem) => 
            <MenuTotem 
              key={totem.id} 
              {...totem} 
              active={activeTotem == totem.id} 
              onTotemClick={() => onTotemClick(totem.id)}
              onDeleteClick={() => onDeleteClick(totem.id)}
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
  onDeleteClick: PropTypes.func.isRequired,
  activeTotem: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
};

export default MenuList;