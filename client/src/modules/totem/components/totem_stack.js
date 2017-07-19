import React from 'react'
import PropTypes from 'prop-types'

import TotemBlock from './totem_block'

const viewStyle = {
  marginLeft: '800px'
}

const TotemStack = ({ totem }) => {
  const blocks = totem.blocks;
  if(blocks) {
    return(
      <div style={viewStyle}>
        {totem.title}
        <ul>
          {blocks.map((block, i) => {
            
            return(
              <TotemBlock 
                key={block._id}
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