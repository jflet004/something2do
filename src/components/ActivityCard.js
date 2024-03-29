import './styles/ActivityCard.css'
import React from 'react'

const ActivityCard = ({ activity, onDeleteActivity }) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/activities/${activity.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => onDeleteActivity(activity))
  }

  let inputTitle = activity.title.charAt(0).toUpperCase() + activity.title.slice(1)
  let inputType, inputPrice;

  activity.type === "diy" ? inputType = activity.type.toUpperCase() : inputType = activity.type.charAt(0).toUpperCase() + activity.type.slice(1)
  activity.price === "free" ? inputPrice = activity.price.toUpperCase() : inputPrice = activity.price

  return (
    <div className='activity-card'>
      <button
        className='delete-btn'
        onClick={handleDeleteClick}
      >X</button>
      <div className='activity-info'>
        <h3>{inputTitle}</h3>
        <h5>Type: {inputType}</h5>
        <h5>Price: {inputPrice}</h5>
        <h5>Participants: {activity.participants}</h5>
      </div>
    </div>
  )
}

export default ActivityCard
