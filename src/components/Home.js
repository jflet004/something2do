import './styles/Home.css'
import React from 'react'

const Home = () => {
  return (
    <div className='home-text'>
      <h4>Are you bored?</h4>
      <ul>
        <li>Go to the <em>Random Activity</em> tab to find something to do!</li>
      </ul>
      <h4>Already have an activity saved? </h4>
      <ul>
        <li>Go to the <em>My Activities</em> tab to access it</li>
      </ul>
      <h4>Have an idea for an activity?</h4>
      <ul>
        <li>Go to the <em>Add Activity</em> tab to add it to your list!</li>
      </ul>
    </div>
  )
}

export default Home
