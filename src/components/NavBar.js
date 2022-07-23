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
    <div>
      <NavLink className='navBar'
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        to="/"
      >Home</NavLink>
      <NavLink className='navBar'
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        to="/randomactivity"
      >Random Activity</NavLink>
      <NavLink className='navBar'
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        to="/activities"
      >My Activities</NavLink>
      <NavLink className='navBar'
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        to="/activityForm"
      >Add Activity</NavLink>
      <NavLink className='navBar'
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        exact
        to="/about"
      >About</NavLink>
    </div>
  )
}

export default NavBar
