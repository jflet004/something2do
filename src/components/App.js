import './styles/App.css'
import React, { useState } from 'react'
import Home from './Home'
import Header from './Header'
import NavBar from './NavBar'
import ActivityContainer from './ActivityContainer'
import ActivityForm from './ActivityForm'
import RandomActivity from './RandomActivity'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [activities, setActivities] = useState([])

  return (
    <div>
      <NavBar />
      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/activities">
          <ActivityContainer
            activities={activities}
            setActivities={setActivities}
          />
        </Route>

        <Route path="/activityform">
          <ActivityForm
            setActivities={setActivities}
          />
        </Route>

        <Route path="/randomactivity">
          <RandomActivity />
        </Route>

      </Switch>
    </div>
  )
}

export default App
