import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from './Button'

Modal.setAppElement('#root')
function NewTask({ addTodos }) {
  const [modalIsOpen, setModal] = useState(false)
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodos(value)
    setValue('')
    setModal(false)
  }

  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <div>
      <div onClick={handleOpenModal}>
        <p>Let's add a new task...</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            width: '50%',
            height: '50%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <h2>Add new task</h2>
        <form onSubmit={handleSubmit}>
          <label>Task:</label>
          <textarea
            type="text"
            name="name"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <p>
            <b>Set Timer</b>
          </p>
          <label>Minute: </label>
          <input name="minutes" type="number" min="0" max="59" />
          <label>Second: </label>
          <input name="seconds" type="number" min="0" max="59" />
          <br />
          <Button text={'Submit'} type="submit" />
          <Button text={'Close'} onClick={handleCloseModal} />
        </form>
        <div></div>
      </Modal>
    </div>
  )
}

export default NewTask
