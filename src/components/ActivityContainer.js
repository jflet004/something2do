import './styles/ActivityCard.css'
import React from 'react'
import ActivityList from "./ActivityList"

const ActivityContainer = ({ activities, onDeleteActivity }) => {
  return (
    <div className='activity-list'>
      <ActivityList
        activities={activities}
        onDeleteActivity={onDeleteActivity}
      />
    </div>
  )
}

export default ActivityContainer
