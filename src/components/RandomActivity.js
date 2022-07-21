import React, { useState } from 'react'
import RandomActivityCard from './RandomActivityCard'

const RandomActivity = () => {
  const [randomActivity, setRandomActivity] = useState([])


  const handleRandomSubmit = e => {
    e.preventDefault()
    fetch("http://www.boredapi.com/api/activity/")
      .then(r => r.json())
      .then(data => setRandomActivity(data))
      .catch(error => alert(error))
  }

  return (
    <div>
      <form onSubmit={handleRandomSubmit}>
        <input type="submit" value="Get Random Activity"></input>
      </form>
        <RandomActivityCard
          title={randomActivity.activity}
          type={randomActivity.type}
          price={randomActivity.price}
          participants={randomActivity.participants}
          link={randomActivity.link}
        />
    </div>
  )
}

export default RandomActivity
