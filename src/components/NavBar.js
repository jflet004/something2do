import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "blue"
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
        exact
        to="/activities"
      >My Activities</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        style={style}
        exact
        to="/randomactivity"
      >Random Activity</NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bolder",
          color: "red",
        }}
        style={style}
        exact
        to="/activityForm"
      >Add Activity</NavLink>
    </div>
  )
}

export default NavBar
