import './styles/NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navigation-bar'>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "#fc5185",
        }}
        exact
        to="/"
      >Home</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "#fc5185",
        }}
        exact
        to="/randomactivity"
      >Random Activity</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "#fc5185",
        }}
        exact
        to="/activities"
      >My Activities</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "#fc5185",
        }}
        exact
        to="/activityForm"
      >Add Activity</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "#fc5185",
        }}
        exact
        to="/about"
      >About</NavLink>
    </div>
  )
}

export default NavBar
