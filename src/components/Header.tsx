import React from 'react'
import Logo from '../assets/logo.svg'

const Header = ({ score }: any) => {
  return (
    <header
      className='header default-margin p-4 rounded-lg max-w-large-mobile'>
      <div className='flex items-center justify-start'>
        <img
          src={Logo} alt='rock-paper-scissors' />
      </div>
      <div className='score px-6 py-1 rounded-lg'>
        <span className='text-small uppercase'>score</span>
        <span className='text-6xl'>{score}</span>
      </div>
    </header>
  )
}

export default Header