import './styles/Form.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ActivityForm = ({ setActivities }) => {

  const [title, setTitle] = useState("")
  const [type, setType] = useState("")
  const [price, setPrice] = useState("")
  const [participants, setParticipants] = useState("")

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault()
    const activityObj = {
      title,
      type,
      price,
      participants,
    }

    fetch("http://localhost:3001/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activityObj)
    })
    // REVISIT
    
    history.push("/activities")

    setTitle("")
    setType("")
    setPrice("")
    setParticipants("")

  }

  return (
    <div className='form-text'>
      <form onSubmit={handleSubmit} className="form">
        <label className='label-text'>Title</label>
        <input className="form-input-box" required onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title}></input><br /><br />
        <label className='label-text'>Type</label>
        <label className='asterisk'>*</label>
        <input className="form-input-box" required onChange={(e) => setType(e.target.value)} type="text" name="type" id="type" value={type}></input><br /><br />
        <label className='label-text'>Price</label>
        <label className='asterisk'>*</label>
        <input className="form-input-box" required onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" value={price}></input><br /><br />
        <label className='label-text'>Participants</label>
        <input className="form-input-box" required onChange={(e) => setParticipants(e.target.value)} type="text" name="participants" id="participants" value={participants}></input><br /><br /><br />
        <input className="submit-btn" type="submit" value="Add"></input><br /><br />
      </form>
      <p className='input-description'>* Type: "education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork" </p>
      <p className='input-description'>* Price: "FREE, $, $$, $$$"</p><br /><br />
    </div>
  )
}

export default ActivityForm
