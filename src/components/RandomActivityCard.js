import "./styles/ActivityCard.css"
import React from 'react'

const RandomActivityCard = ({ randomActivity, isClicked, setIsClicked, onAddActivity }) => {


  let activityPrice;

  if (randomActivity.price === 0) {
    activityPrice = "FREE"
  } else if (randomActivity.price <= 0.33) {
    activityPrice = "$"
  } else if (randomActivity.price <= 0.66 && randomActivity.price > 0.33) {
    activityPrice = "$$"
  } else {
    activityPrice = "$$$"
  }

  const handleAddClick = () => {
    const selectedRandomActivity = {
      title: randomActivity.activity,
      type: randomActivity.type,
      price: activityPrice,
      participants: randomActivity.participants,
    }

    fetch(`http://localhost:3001/activities
    `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(selectedRandomActivity)
    })
      .then(response => response.json())
      .then(data => onAddActivity(data))
      .catch(error => alert(error))

    setIsClicked(!isClicked)
  }


  return (
    <div>
      <div className='activity-card'>
        <div className='activity-info'>
          <h3>{randomActivity.activity}</h3>
          <h5>Type: {randomActivity.type.charAt(0).toUpperCase() + randomActivity.type.slice(1)}</h5>
          <h5>Price: {activityPrice}</h5>
          <h5>Participants: {randomActivity.participants}</h5>
          <button className={isClicked ? 'clicked' : 'add-activity-btn'}
            onClick={handleAddClick}
            disabled={isClicked}
          >{isClicked ? "Added" : 'Add to "My Activities"'}</button>
        </div>
      </div>
    </div>
  )
}

export default RandomActivityCard
