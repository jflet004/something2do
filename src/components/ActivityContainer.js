import React, { useState, useEffect } from 'react'
import ActivityFilter from "./ActivityFilter"
import ActivityList from "./ActivityList"

const ActivityContainer = () => {

  const [activities, setActivities] = useState([])
  const [filteredActivities, setFilteredActivities] = useState(activities)
  
  useEffect(() => {
    fetch("http://localhost:3001/activities")
    .then(r => r.json())
    .then(data => {
      setActivities(data)
      setFilteredActivities(data)
    })
    .catch(error => alert(error))
  },[])

  const handleSearch = (searchValue) => {
    const updatedActivityList = activities.filter(activity => activity.price === searchValue)
    setFilteredActivities(updatedActivityList)
  }

  return (
    <div>
      <ActivityFilter
        handleSearch={handleSearch}
      />
      <ActivityList 
        activities={filteredActivities}
      />

    </div>
  )
}

export default ActivityContainer
