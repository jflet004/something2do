import React, { useState } from 'react'

const ActivityFilter = ({ handleSearch }) => {
  const [search, setSearch] = useState("")

  const handleChange = e => {
    setSearch(e.target.value)
    handleSearch(e.target.value)
  }

  return (
    <div>
      Filter By Price:
      <select name='dropdown' onChange={handleChange}>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>

    </div>
  )
}

export default ActivityFilter
