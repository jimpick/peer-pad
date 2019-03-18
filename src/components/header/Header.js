import React from 'react'
import { Link } from 'react-router-dom'

export default ({ children }) => (
  <div className='pa3 bg-big-stone mb4'>
    <div className='flex flex-row items-center'>
      <Link to='/' data-id='home-link'>
        <img src='images/logo-peerpad.svg' alt='PeerPad logo' className='mr4' />
      </Link>
      {children}
    </div>
  </div>
)
