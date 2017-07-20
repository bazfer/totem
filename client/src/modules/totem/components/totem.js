import React from 'react'
import TotemController from '../controllers/TotemController'
import AddBlockController from '../controllers/AddBlockController'

const Totem = () => (
    <div className='totem'>
        <TotemController />
        <AddBlockController />
    </div>
)

export default Totem