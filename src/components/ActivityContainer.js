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
  }, [])

  const handleFilterByPrice = (searchValue) => {
    const updatedActivityList = activities.filter(activity => activity.price === searchValue)
    setFilteredActivities(updatedActivityList)
  }

  const handleDeleteActivity = (deletedActivity) => {
    const updatedActivityList2 = filteredActivities.filter(activity => activity.id !== deletedActivity.id)
    setFilteredActivities(updatedActivityList2)
  }

  return (
    <div>
      <ActivityFilter
        handleFilterByPrice={handleFilterByPrice}
      />
      <ActivityList
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />

    </div>
  )
}

export default ActivityContainer
