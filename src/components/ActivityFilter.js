import React, { useState } from 'react'

const ActivityFilter = ({ handleFilterByPrice }) => {
  const [priceFilter, setPriceFilter] = useState("")

  const handlePriceFilter = e => {
    setPriceFilter(e.target.value)
    handleFilterByPrice(e.target.value)
  }

  return (
    <div>
      Filter By Price:
      <select name='dropdown' onChange={handlePriceFilter}>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>

    </div>
  )
}

export default ActivityFilter
