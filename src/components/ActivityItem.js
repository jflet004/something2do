import './styles/Activity.css'
import React from 'react'

const ActivityItem = ({ activity, onDeleteActivity }) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/activities/${activity.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => onDeleteActivity(activity))
  }

  return (
    <div className='activity-card'>
      <button
        onClick={handleDeleteClick}
      >X</button>
      <div className='activity-info'>
        <h3>{activity.title}</h3>
        <h5>Type: {activity.type}</h5>
        <h5>Price: {activity.price}</h5>
        <h5>Participants: {activity.participants}</h5>
        <h5>Link: {activity.link}</h5>
      </div>
    </div>
  )
}

export default ActivityItem
