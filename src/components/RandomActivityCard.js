import React from 'react'

const RandomActivityCard = ({ title, type, price, participants, link }) => {
  return (
    <div>
      <div className='activity-card'>
        <div className='activity-info'>
          <h3>{title}</h3>
          <h5>Type: {type}</h5>
          <h5>Price: {price > 1 ? "$$" : "$"}</h5>
          <h5>Participants: {participants}</h5>
          <h5>Link: {link}</h5>
        </div>
      </div>
    </div>
  )
}

export default RandomActivityCard
