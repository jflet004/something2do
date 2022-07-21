import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em"
}
const NavBar = () => {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        style={style}
        exact
        to="/"
      >Home</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        style={style}
        to="/activities"
      >My Activities</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        style={style}
        to="/activityForm"
      >Add Activity</NavLink>
    </div>
  )
}

export default NavBar
