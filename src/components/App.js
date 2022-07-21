import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import ActivityContainer from './ActivityContainer'
import Footer from './Footer'
import ActivityForm from './ActivityForm'


const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Switch>
        <Route>

        </Route>
      </Switch>
    </div>
  )
}

export default App
