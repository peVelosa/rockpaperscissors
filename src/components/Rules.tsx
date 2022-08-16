import React, { useState } from 'react'
import Modal from './Modal'
import gameRules from '../assets/image-rules.svg'
import { FaTimes } from 'react-icons/fa';

const Rules = () => {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <>
      <div className='rules'>
        <button className='rounded'
          id='rules'
          onClick={toggleModal}>rules</button>
      </div>
      {
        showModal &&
        <Modal>
          <div className='title'>
            <p>rules</p>
            <button
              onClick={toggleModal}
              className='close'><FaTimes /></button>
          </div>
          <div className='content'>
            <img src={gameRules}
              alt="Rock crushes scissors, scissors cut paper, and paper covers rock." />
            <div
              className='hidden laptop:block'>
              <h2 className='text-3xl'>If you have a keyboard:</h2>
              <ul
                className='text-2xl px-8 py-2 list-disc	'>
                <li>
                  Press '1' to select 'Paper'
                </li>
                <li>
                  Press '2' to select 'Scissors'
                </li>
                <li>
                  Press '3' to select 'Rock'
                </li>
              </ul>
            </div>
          </div>
          <div className='close'>
            <button
              onClick={toggleModal}
            ><FaTimes /></button>
          </div>
        </Modal>
      }

    </>
  )
}

export default Rules