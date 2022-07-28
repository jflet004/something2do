import './styles/RandomActivity.css'
import React, { useState } from 'react'
import RandomActivityCard from './RandomActivityCard'

const RandomActivity = () => {
  const [randomActivity, setRandomActivity] = useState()
  const [isClicked, setIsClicked] = useState(false)



  const handleRandomActivityClick = e => {
    e.preventDefault()
    fetch("http://www.boredapi.com/api/activity/")
      .then(r => r.json())
      .then(data => setRandomActivity(data))
      .catch(error => alert(error))

    setIsClicked(false)
  }

  return (
    <div className='random'>
    <button className='randomBtn' onClick={handleRandomActivityClick}>Get Random Activity</button>
      {randomActivity && <RandomActivityCard
        randomActivity={randomActivity}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />}
    </div>
  )
}

export default RandomActivity
