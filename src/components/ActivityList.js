import React from 'react'
import ActivityItem from './ActivityItem'

const ActivityList = ({ activities, onDeleteActivity }) => {
  const activitiesCards = activities.map(activity => 
    <ActivityItem 
      key={activity.id}
      activity={activity}
      onDeleteActivity={onDeleteActivity}
    />
  )
  return (
    <div>
      {activitiesCards}
    </div>
  )
}

export default ActivityList
