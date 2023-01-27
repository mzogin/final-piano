import React, { useState } from 'react'

const ContactForm = () => {
  const [status, setStatus] = useState('Submit')
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
    alert(result.status)
  }
  return (
    <article className='contact-form'>
      <h3>send a message</h3>
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
    </article>
  )
}

export default ContactForm
