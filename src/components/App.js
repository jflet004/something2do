import './App.css'
import React from 'react'
import Home from './Home'
import Header from './Header'
import NavBar from './NavBar'
import ActivityContainer from './ActivityContainer'
import ActivityForm from './ActivityForm'
import RandomActivity from './RandomActivity'
import About from './About'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar />
      <Header
        appName="Something2Do"
        slogan="A solution to your boredom"
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/activities">
          <ActivityContainer />
        </Route>

        <Route path="/activityform">
          <ActivityForm />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/randomactivity">
          <RandomActivity />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
