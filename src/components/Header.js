import './styles/Header.css'
import logo from './images/websiteLogo.png'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} />
    </div>
  )
}

export default Header
