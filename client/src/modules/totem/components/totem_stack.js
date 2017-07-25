import React from 'react'
import PropTypes from 'prop-types'

import TotemBlock from './totem_block'

const TotemStack = ({ blocks, title, isRunning, stopwatch }) => {
  // async valve
  if(blocks) {
    // shallow copy to reverse array
    // careful with this, you are creating a copy of your state
    // make sure this data doesn't flow anywhere but dies on render
    let blockStack = blocks.slice(0).reverse();
    return(
      <div className='totem'>
        <div className='title'>
          {title}
        </div>
        <ul className='stack'>
          {blockStack.map((block, i) => {
            return(
              <TotemBlock 
                key={i}
                {...block}
                notes={block.notes}
                stopwatch={stopwatch}
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
  title: PropTypes.string.isRequired,
  blocks: PropTypes.array.isRequired,
  isRunning: PropTypes.bool.isRequired,
  stopwatch: PropTypes.string.isRequired
}

export default TotemStack