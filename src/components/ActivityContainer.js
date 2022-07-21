import React, { useState, useEffect } from 'react'
import ActivityFilter from "./ActivityFilter"
import ActivityList from "./ActivityList"

const ActivityContainer = () => {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/activities")
    .then(r => r.json())
    .then(data => setActivities(data))
    .catch(error => alert(error))
  },[])

  return (
    <div>
      <ActivityFilter />
      <ActivityList 
        activities={activities}
      />

    </div>
  )
}

export default ActivityContainer
