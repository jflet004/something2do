import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import NavBar from './NavBar'
import ActivityContainer from './ActivityContainer'
import Footer from './Footer'
import ActivityForm from './ActivityForm'

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/activities">
          <ActivityContainer />
        </Route>

        <Route exact path="/addactivity">
          <ActivityForm />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
