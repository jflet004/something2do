import React from 'react'

const Header = ({ slogan, appName }) => {
  return (
    <div>
      <h1>{appName}</h1>
      <h3>{slogan}</h3>
    </div>
  )
}

export default Header
