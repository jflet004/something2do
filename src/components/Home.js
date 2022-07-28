import './styles/Home.css'
import React from 'react'

const Home = () => {
  return (
    <div className='home-text'>
      <h4>Are you bored?</h4>
      <ul>
        <li>Head over to the Random Activity tab to find something to do!</li>
      </ul>
      <h4>Already have an activity saved? </h4>
      <ul>
        <li>Head over to the My Activities tab to access it</li>
      </ul>
      <h4>Have an idea for an activity?</h4>
      <ul>
        <li>Head over to the Add Activity tab to add it to your list!</li>
      </ul>
    </div>
  )
}

export default Home
