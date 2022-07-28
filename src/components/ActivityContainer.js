import './styles/ActivityCard.css'
import React, { useEffect } from 'react'
import ActivityList from "./ActivityList"

const ActivityContainer = ({ activities, setActivities }) => {

  useEffect(() => {
    fetch("http://localhost:3001/activities")
      .then(r => r.json())
      .then(data => {
        setActivities(data)
      })
      .catch(error => alert(error))
  }, [])

  const handleDeleteActivity = (deletedActivity) => {
    const updatedActivityList = activities.filter(activity => activity.id !== deletedActivity.id)
    setActivities(updatedActivityList)
  }

  return (
    <div className='activity-list'>
      <ActivityList
        activities={activities}
        onDeleteActivity={handleDeleteActivity}
      />
    </div>
  )
}

export default ActivityContainer
