import React from 'react'
import ActivityCard from './ActivityCard'

const ActivityList = ({ activities, onDeleteActivity }) => {
  const activityCards = activities.map(activity => 
    <ActivityCard 
      key={activity.id}
      activity={activity}
      onDeleteActivity={onDeleteActivity}
    />
  )
  return (
    <div className='card'>
      {activityCards}
    </div>
  )
}

export default ActivityList
