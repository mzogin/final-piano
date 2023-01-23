import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    // <div className='accordion-item'>
    //   <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
    //     <div>{title}</div>
    //     <div>{isActive ? '-' : '+'}</div>
    //   </div>
    //   {isActive && <div className='accordion-content'>{content}</div>}
    // </div>
    <div className='accordion-item'>
      <div className='accordion' onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        {/* <div>{isActive ? '-' : '+'}</div> */}
        <div>{isActive ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      <div className={`panel ${isActive ? 'active-panel' : 'hidden-panel'}`}>
        {content}
      </div>
    </div>
  )
}

export default Accordion
