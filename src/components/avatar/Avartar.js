import React from 'react'
import './avatar.scss'
import img from '../../assets/profile.png'

function Avartar() {

  return (
    <div className='avatar'>
        <div className="image">
            <img src={img} alt="" />
        </div>
      
    </div>
  )
}

export default Avartar

