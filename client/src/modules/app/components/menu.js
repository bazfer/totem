import React from 'react'
import MenuController from '../controllers/MenuController'
import AddTotemController from '../controllers/AddTotemController'

const Menu = () => (
  <nav className='menu'>
    <MenuController />
    <AddTotemController />
  </nav>
)

export default Menu