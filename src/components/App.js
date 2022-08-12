import './styles/App.css'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Header from './Header'
import NavBar from './NavBar'
import ActivityContainer from './ActivityContainer'
import ActivityForm from './ActivityForm'
import RandomActivity from './RandomActivity'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/activities")
      .then(r => r.json())
      .then(data => setActivities(data))
      .catch(error => alert(error))
  }, [])

  const handleDeleteActivity = (deletedActivity) => {
    const updatedActivityList = activities.filter(activity => activity.id !== deletedActivity.id)
    setActivities(updatedActivityList)
  }

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity])
  }

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
            onDeleteActivity={handleDeleteActivity}
          />
        </Route>

        <Route path="/activityform">
          <ActivityForm
            onAddActivity={handleAddActivity}
            />
        </Route>

        <Route path="/randomactivity">
          <RandomActivity 
            onAddActivity={handleAddActivity}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
