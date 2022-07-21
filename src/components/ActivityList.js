import React from 'react'
import ActivityItem from './ActivityItem'

const ActivityList = ({ activities }) => {
  const activitiesCards = activities.map(activity => 
    <ActivityItem 
      key={activity.id}
      activity={activity}
    />
  )
  return (
    <div>
      {activitiesCards}
    </div>
  )
}

export default ActivityList
