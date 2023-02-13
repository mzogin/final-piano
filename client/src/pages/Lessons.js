import React from 'react'
import ContactForm from '../components/ContactForm'

export const Lessons = () => {
  return (
    <section className='lessons-section'>
      <div className='section-center initial-section'>
        <div className='flex-container'>
          <article className='lessons-info'>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              nihil veniam accusantium earum ex praesentium nam nostrum ipsum
              laboriosam, necessitatibus quos. Sequi, maxime. Nemo quas pariatur
              aut voluptas porro voluptates?
            </p>
          </article>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
