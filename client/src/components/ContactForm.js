import React, { useState } from 'react'
import { Popup } from './Popup'

const ContactForm = () => {
  const [status, setStatus] = useState('Submit')
  const [showPopup, setShowPopup] = useState(false)
  const [resultStatus, setResultStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    // /contact
    // message
    // !! for deployment
    // let response = await fetch('http://localhost:5000/send', {
    let response = await fetch('./send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Submit')
    let result = await response.json()
    // !handle popup here
    setShowPopup(true)
    setResultStatus(result.status)
    console.log(typeof result.status)
    // alert(result.status)
  }
  return (
    <article className='contact-form'>
      <h3>send me a message</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          {/* INPUTS */}

          {/* <label htmlFor='name'>Name</label> */}
          <input
            className='form-control'
            type='text'
            id='name'
            placeholder='your name'
            required
          />

          {/* <label htmlFor='email'>Email</label> */}
          <input
            className='form-control'
            type='email'
            id='email'
            placeholder='your email'
            required
          />

          {/* <label htmlFor='message'>Message</label> */}
          <textarea
            className='form-control'
            id='message'
            placeholder='type your message here'
            rows={5}
            required
          />
          <button className='submit-btn btn' type='submit'>
            {status}
          </button>
        </div>
      </form>
      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        {resultStatus === 'success' ? (
          <div>
            <h3>Thank you</h3>
            <p>your message has been sent, I will get back to you shortly</p>
          </div>
        ) : (
          <div>
            <h3>oops... something went wrong</h3>
            <p>
              sorry, your message failed to send. Please take a look at my
              contact page for all my contact information. Thank you
            </p>
          </div>
        )}
      </Popup>
    </article>
  )
}

export default ContactForm
