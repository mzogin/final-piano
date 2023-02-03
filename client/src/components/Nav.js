import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAlignJustify } from 'react-icons/fa'

export const Nav = () => {
  const [showNav, setShow] = useState(false)
  const handleClick = () => {
    showNav ? setShow(false) : setShow(true)
  }
  const handleItemClick = () => {
    setShow(false)
  }

  return (
    <nav className='navbar' id='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button
            onClick={handleClick}
            className={`nav-btn ${showNav ? 'active-nav-btn' : ''}`}
            id='nav-btn'
          >
            <FaAlignJustify />
          </button>
        </div>
        <ul className={`nav-items ${showNav ? 'show-items' : ''}`}>
          <li>
            <NavLink to='/' className='nav-link' onClick={handleItemClick}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/biography'
              className='nav-link'
              onClick={handleItemClick}
            >
              biography
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/lessons'
              className='nav-link'
              onClick={handleItemClick}
            >
              lessons
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/awards'
              className='nav-link'
              onClick={handleItemClick}
            >
              awards
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/photos'
              className='nav-link'
              onClick={handleItemClick}
            >
              photos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/videos'
              className='nav-link'
              onClick={handleItemClick}
            >
              videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='nav-link'
              onClick={handleItemClick}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
