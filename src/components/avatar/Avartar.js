import React from 'react'
import './avatar.scss'

function Avartar(props) {

  return (
    <div className='avatar'>
        <div className="image">
            Hi, {props.name}
        </div>
      
    </div>
  )
}

export default Avartar

