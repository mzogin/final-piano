import React from 'react'

export const Popup = (props) => {
  console.log(props.trigger)
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        {props.children}
        <div className='popup-btn-container'>
          <button
            className='btn popup-close'
            onClick={() => props.setTrigger(false)}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}
