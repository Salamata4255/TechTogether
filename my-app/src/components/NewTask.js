import React, { useState } from 'react'

function NewTask({ addTodos }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodos(value)
    setValue('')
  }
  return (
    <div className="newtask">
      <p>what to do</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <br />
        <button type="submit" className="subbutt">
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewTask
