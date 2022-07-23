import './styles/NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

// const style = {
//   width: "60%",
//   margin: "5% 0 1%",
//   padding: "1em",
//   textDecoration: "none",
//   color: "blue"
// }
const NavBar = () => {
  return (
    <div className='navigation-bar'>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "black",
        }}
        exact
        to="/"
      >Home</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "black",
        }}
        exact
        to="/randomactivity"
      >Random Activity</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "black",
        }}
        exact
        to="/activities"
      >My Activities</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "black",
        }}
        exact
        to="/activityForm"
      >Add Activity</NavLink>
      <NavLink className='link'
        activeStyle={{
          fontWeight: "bolder",
          color: "black",
        }}
        exact
        to="/about"
      >About</NavLink>
    </div>
  )
}

export default NavBar
