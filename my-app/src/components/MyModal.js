import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from './Button'

Modal.setAppElement('#root')
function MyModal({ title, content, trigger, handleTrigger, index, media }) {
  const [modalIsOpen, setModal] = useState(false)
  const handleOpenModal = () => {
    setModal(true)
    handleTrigger(index)
  }

  const handleCloseModal = () => {
    setModal(false)
  }
  return (
    <div>
      <Button onClick={handleOpenModal} text={trigger} />

      <Modal
        isOpen={modalIsOpen}
        style={{
          content: {
            width: '50%',
            height: '60%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{content2}</p>
        <img
          style={{ width: '40%', marginBottom: '10px' }}
          src={media}
          alt="deco"
        />
        <Button text={'Close'} onClick={handleCloseModal} />
      </Modal>
    </div>
  )
}

export default MyModal
