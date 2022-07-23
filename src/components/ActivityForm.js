import React, { useState } from 'react'

const ActivityForm = () => {

  const [title, setTitle] = useState("")
  const [type, setType] = useState("")
  const [price, setPrice] = useState("")
  const [participants, setParticipants] = useState("")

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

    setTitle("")
    setType("")
    setPrice("")
    setParticipants("")

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>*Title</label>
        <input required onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title}></input><br /><br />
        <label>*Type</label>
        <input required onChange={(e) => setType(e.target.value)} type="text" name="type" id="type" value={type}></input><br /><br />
        <label>*Price</label>
        <input required onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" value={price}></input><br /><br />
        <label>*Participants</label>
        <input required onChange={(e) => setParticipants(e.target.value)} type="text" name="participants" id="participants" value={participants}></input><br /><br />
        <p>* required fields</p>
        <input type="submit" value="Add"></input><br /><br />
      </form>
    </div>
  )
}

export default ActivityForm
