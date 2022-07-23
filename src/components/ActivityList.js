import React from 'react'
import ActivityItem from './ActivityItem'

const ActivityList = ({ activities, onDeleteActivity }) => {
  const activityCards = activities.map(activity => 
    <ActivityItem 
      key={activity.id}
      activity={activity}
      onDeleteActivity={onDeleteActivity}
    />
  )
  return (
    <div>
      {activityCards}
    </div>
  )
}

export default ActivityList
