import React from 'react'

export const Footer = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()

  return (
    <footer className='footer'>
      <h4 className='footer-text'>
        &copy; <span id='date'>{year}</span>
        <span className='company'> olga berkovich's music academy </span>
        <br /> all rights reserved
      </h4>
    </footer>
  )
}
