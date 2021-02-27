import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button } from './Button'

Modal.setAppElement('#root')
function MyModal({ title, content, trigger, handleTrigger, index }) {
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
            height: '50%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <h2>{title}</h2>
        <p>{content}</p>
        <img
          style={{ width: '35%', marginBottom: '10px' }}
          src="https://scontent.fhan5-5.fna.fbcdn.net/v/t1.15752-9/121227719_363739668154211_1184531090671158384_n.jpg?_nc_cat=108&ccb=3&_nc_sid=ae9488&_nc_ohc=JPBIX0n6bD8AX8szdis&_nc_ht=scontent.fhan5-5.fna&oh=1f38fe665564f06c0c35ed2027dfa886&oe=605F6B66"
          alt="deco"
        />
        <Button text={'Close'} onClick={handleCloseModal} />
      </Modal>
    </div>
  )
}

export default MyModal
