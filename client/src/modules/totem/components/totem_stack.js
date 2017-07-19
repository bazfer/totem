import React from 'react'
import PropTypes from 'prop-types'

import TotemBlock from './totem_block'

const TotemStack = ({ totem }) => {
  // async valve
  if(totem.blocks) {
    // shallow copy to reverse array
    // careful with this, you are creating a copy of your state
    // make sure this data doesn't flow anywhere but dies on render
    let blocks = totem.blocks.slice(0).reverse();
    return(
      <div className='totem'>
        <div className='title'>
          {totem.title}
        </div>
        <ul className='stack'>
          {blocks.map((block, i) => {
            return(
              <TotemBlock 
                key={i}
                {...block}
                notes={block.notes}
              />
            )
          }
            
          )}
        </ul>
      </div>
    )
  } else {
    return(
      <div>
        Loading
      </div>
    )
  } 
}

TotemStack.propTypes = {
  totem: PropTypes.object.isRequired,
  // totem_title: PropTypes.string.isRequired
}

export default TotemStack