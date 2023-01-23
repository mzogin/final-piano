import React from 'react'

import image from '../assets/images/profile.png'
import logo from '../assets/images/logo/logo.png'

import { Carousel } from '../components/Carousel'
import { accordionData } from '../utils'
import Accordion from '../components/Accordion'
import { Footer } from '../components/Footer'
import { FaArrowDown } from 'react-icons/fa'

export const Home = () => {
  return (
    <>
      <header className='header'>
        {/* card */}
        <div className='section-center initial-section'>
          {/* <div className='headline'>
            <h1>
              <span style={{ color: 'white', fontStyle: 'italic' }}>
                piano{' '}
              </span>
              lessons for
              <span className='alt-text' style={{ color: '#f98598' }}>
                {' '}
                ALL{' '}
              </span>
              levels!
            </h1>
          </div> */}
          <div className='flex-center'>
            <div className='banner'>
              <div className='banner-text'>
                {/* <h1>
                  <span style={{ color: 'white', fontStyle: 'italic' }}>
                    piano lessons
                  </span>
                  <br />
                  <span>for ALL levels!</span>
                </h1> */}
                <div className='logo-container'>
                  <img src={logo} alt='logo' />
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptates ut eligendi et tenetur ex iure optio odio nam
                  voluptatibus commodi, cumque doloribus unde. Unde assumenda
                  soluta earum? Facilis, reiciendis nisi.
                </p>
                {/* <h1>
                Olga Berkovich's <br />
                <span className='alt-text'> Music Academy</span>
              </h1> */}
                {/* <h1>Olga Berkovich</h1>
              <ul>
                <li>
                  <h3>- Piano Player</h3>
                </li>
                <li>
                  <h3>- Composer</h3>
                </li>
                <li>
                  <h3>- Music Teacher</h3>
                </li>
              </ul> */}
              </div>
              {/* <div className='btn-container'>
              <a href='skills.html' className='btn banner-btn facebook-btn'>
                <i className='fa-brands fa-facebook'></i>
                facebook
              </a>
            </div> */}
            </div>
            {/* <article className='banner-img'>
              <div className='banner-pic-container'>
                <img src={image} alt='profile picture' />
              </div>
            </article> */}
          </div>
          <div className='hero-btn-container'>
            <div className='hero-btn-text'>explore</div>
            <a className='hero-btn' href='#overview'>
              <FaArrowDown />
              {/* <i className='fa-solid fa-arrow-down'></i> */}
            </a>
            {/* <button className='hero-btn'>
              <i className='fa-solid fa-arrow-down'></i>
            </button> */}
          </div>
        </div>
      </header>
      {/* end header */}

      {/* OVERVIEW BEGIN */}
      <section id='overview' className='overview section-pink'>
        <div className='section-center'>
          <h1 className='section-title'>a brief overview</h1>
          <div className='flex-container'>
            <div className='section-text'>
              <h2>Olga Berkovich</h2>
              <ul>
                <li>
                  <h3>- Piano Player</h3>
                </li>
                <li>
                  <h3>- Composer</h3>
                </li>
                <li>
                  <h3>- Music Teacher</h3>
                </li>
              </ul>
              {/* <div className='btn-container'>
              <a href='skills.html' className='btn banner-btn facebook-btn'>
                <i className='fa-brands fa-facebook'></i>
                facebook
              </a>
            </div> */}
            </div>
            <article className='banner-img'>
              <div className='banner-pic-container'>
                <img src={image} alt='profile' />
              </div>
            </article>
          </div>
          <div className='flex-container flex-reverse'>
            <div className='section-text'>
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, sapiente modi. Deserunt magni aliquam, modi quasi
                maxime doloribus, neque deleniti saepe non laborum minima totam
                est! Non nihil illum quos?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates ut eligendi et tenetur ex iure optio odio nam
                voluptatibus commodi, cumque doloribus unde. Unde assumenda
                soluta earum? Facilis, reiciendis nisi.
              </p>
            </div>
            <article className='banner-img'>
              <div className='banner-pic-container'>
                <img src={image} alt='profile' />
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* OVERVIEW END */}

      {/* {testimonials start} */}
      <section className='testimonials'>
        <div className='section-center'>
          <h1 className='section-title'>Testimonials</h1>
          <Carousel />
          {/* <div className='carousel-container'>
            <div className='carousel-item'>
              <h1>Item 1</h1>
            </div>
            <div className='carousel-item'>
              <h1>Item 2</h1>
            </div>
            <div className='carousel-item'>
              <h1>Item 3</h1>
            </div>
          </div> */}
        </div>
      </section>
      {/* testimonials end */}
      <section className='questions section-secondary'>
        <div className='section-center'>
          <h1 className='section-title'>frequently asked questions</h1>
          <div className='accordion-container'>
            {accordionData.map((data, index) => (
              // console.log(data)
              // const { title, content } = data

              <Accordion
                key={index}
                title={data.title}
                content={data.content}
              />
            ))}
            {/* <button class='accordion'>Section 1</button>
            <div class='panel'>
              <p>Lorem ipsum...</p>
            </div>

            <button class='accordion'>Section 2</button>
            <div class='panel'>
              <p>Lorem ipsum...</p>
            </div>

            <button class='accordion'>Section 3</button>
            <div class='panel'>
              <p>Lorem ipsum...</p>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
      {/* <footer className='footer'>
        <h4 class='footer-text'>
          &copy; <span id='date'></span>
          <span class='company'>olga berkovich's music academy </span>
          <br /> all rights reserved
        </h4>
      </footer> */}
    </>
  )
}
