import React from 'react'
import MenuController from '../controllers/MenuController'
import AddTotemController from '../controllers/AddTotemController'
import MenuHeaderController from '../controllers/MenuHeaderController'


const Menu = () => (
  <nav className='menu'>
    <MenuHeaderController />
    <MenuController />
    <AddTotemController />
    
  </nav>
)

export default Menu