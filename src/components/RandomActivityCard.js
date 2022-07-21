import React, { useState } from 'react'

const RandomActivityCard = ({ randomActivity }) => {

  const [isClicked, setIsClicked] = useState(false)
  
  const handleAddClick = () => {
    
    const selectedRandomActivity = {
      title: randomActivity.activity,
      type: randomActivity.type,
      price: randomActivity.price,
      participants: randomActivity.participants,
      link: randomActivity.link
    }
    fetch(`http://localhost:3001/activities
    `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(selectedRandomActivity)
    })
    setIsClicked(!isClicked)
  }


  return (
    <div>
      <div className='activity-card'>
        <div className='activity-info'>
          <h3>{randomActivity.activity}</h3>
          <h5>Type: {randomActivity.type}</h5>
          <h5>Price: {randomActivity.price > 1 ? "$$" : "$"}</h5>
          <h5>Participants: {randomActivity.participants}</h5>
          <h5>Link: {randomActivity.link}</h5>
          <button
            onClick={handleAddClick}
            disabled={isClicked}
          >{isClicked ? "Added" : 'Add to "My Activities"'}</button>
        </div>
      </div>
    </div>
  )
}

export default RandomActivityCard
