import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
// import img from '../assets/images/piano2.jpg'

export const Contact = () => {
  return (
    <section className='contact-section'>
      <div className='section-center initial-section'>
        {/* <div className='contact-card'>
          <div className='inner-contact-card'>
            <div className='contact-header'>
              <h3>Olga Berkovich</h3>
            </div>
            <div className='contact-info-text'>
              <div className='contact-item'>
                <h4 className='contact-title'>
                  <span className='contact-icon'>
                    <FaLocationArrow />
                  </span>
                  address
                </h4>
                <h4 className='contact-text'>
                  41 King St. <br />
                  Nashua, NH 03060
                </h4>
              </div>
              <div className='contact-item'>
                <h4 className='contact-title'>
                  <span className='contact-icon'>
                    <FaPhone />
                  </span>
                  telephone
                </h4>
                <h4 className='contact-text'>(603) 809-1218</h4>
              </div>
              <div className='contact-item'>
                <h4 className='contact-title'>
                  <span className='contact-icon'>
                    <FaEnvelope />
                  </span>
                  email
                </h4>
                <h4 className='contact-text'>oglayas@gmail.com</h4>
              </div>
              <div className='btn-container'>
                <a href='skills.html' className='btn banner-btn facebook-btn'>
                  <FaFacebook style={{ marginRight: '1rem' }} />
                  facebook
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className='card-container'>
          <div className='card-column'>
            {/* <div className='contact-header'>
              <h3>Olga Berkovich</h3>
            </div> */}
            <div className='contact-info-text'>
              <div className='contact-item'>
                <h4 className='contact-title'>
                  <span className='contact-icon'>
                    <FaLocationArrow />
                  </span>
                  address
                </h4>
                <h4 className='contact-text'>
                  41 King St. <br />
                  Nashua, NH 03060
                </h4>
              </div>
              <div className='contact-item'>
                <h4 className='contact-title'>
                  <span className='contact-icon'>
                    <FaPhone />
                  </span>
                  telephone
                </h4>
                <h4 className='contact-text'>(603) 809-1218</h4>
              </div>
              <div className='contact-item'>
                <h4 className='contact-title'>
                  <span className='contact-icon'>
                    <FaEnvelope />
                  </span>
                  email
                </h4>
                <h4 className='contact-text'>oglayas@gmail.com</h4>
              </div>
              <div className='btn-container'>
                <a href='skills.html' className='btn banner-btn facebook-btn'>
                  <FaFacebook style={{ marginRight: '1rem' }} />
                  facebook
                </a>
              </div>
            </div>
          </div>
          <div className='card-image'>
            {/* <img src={img} /> */}
            <h3>Olga Berkovich</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
