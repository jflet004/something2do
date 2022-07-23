import './styles/Header.css'
import React from 'react'

const Header = ({ slogan, appName }) => {
  return (
    <div className='header'>
      <h1>{appName}</h1>
      <h3>{slogan}</h3>
    </div>
  )
}

export default Header
