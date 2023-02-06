import React from 'react'

import image from '../assets/images/profile.png'
// import image1 from '../assets/images/overview/img1.jpg'
import logo from '../assets/images/logo/logo.svg'

// import { Carousel } from '../components/Carousel'
import { accordionData } from '../utils'
import Accordion from '../components/Accordion'
import { ImageSlider } from '../components/ImageSlider'
import { Footer } from '../components/Footer'
import { FaArrowDown } from 'react-icons/fa'
import { importImages } from '../utils/importImages'

export const Home = () => {
  const slides = importImages(
    require.context('../assets/images/overview', false, /\.(png|jpe?g|svg)$/)
  )

  // const containerStyles = {
  //   width: '25rem',
  //   maxWidth: '90vw',
  //   height: '20rem',
  //   margin: '0 auto',
  // }

  return (
    <>
      {/* header */}
      <header className='header'>
        {/* card */}
        {/* <div className='center-container initial-section'>
          <div className="flex-center"> */}

        {/* <div className='initial-section'> */}
        <div className='header-content'>
          <div>
            <div>
              <div className='banner-text'>
                <div className='logo-container'>
                  <img src={logo} alt='logo' />
                </div>
                <p>Music lessons in Nashua, New Hampshire</p>
              </div>
            </div>
            {/* !! */}
          </div>
          {/* !! */}
        </div>
        <div className='hero-btn-container'>
          <div className='hero-btn-text'>explore</div>
          <div className='temp-container'>
            <a className='hero-btn' href='#overview'>
              <FaArrowDown />
            </a>
          </div>
        </div>
      </header>
      {/* end header */}

      {/* OVERVIEW BEGIN */}
      {/* section-pink */}
      <section id='overview' className='overview magnolia'>
        <div className='section-center'>
          <h1 className='section-title'>about</h1>
          <div className='flex-container extra-margin'>
            <div className='text-center section-text'>
              <h2>Dr. Olga Berkovich</h2>
              <h3>
                <span>pianist</span>, <span>organist</span>,{' '}
                <span>composer</span>
              </h3>
              <h3>
                <span>music</span> <span>teacher</span>
              </h3>
              {/* <ul>
                <li>
                  <h3>Pianist</h3>
                </li>
                <li>
                  <h3>Organist</h3>
                </li>
                <li>
                  <h3>Composer</h3>
                </li>
                <li>
                  <h3>Music Teacher</h3>
                </li>
              </ul> */}
            </div>
            <article className='profile-img'>
              <div className='profile-pic-container'>
                <img src={image} alt='profile' />
              </div>
            </article>
          </div>
          <div className='flex-container flex-reverse'>
            <div className='section-text'>
              <h2 className='text-center'>my school</h2>
              <p>
                I offer my students piano lessons, organ lessons, as well as
                lessons in music theory and composition
              </p>
              {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates ut eligendi et tenetur ex iure optio odio nam
                voluptatibus commodi, cumque doloribus unde. Unde assumenda
                soluta earum? Facilis, reiciendis nisi.
              </p> */}
            </div>
            {/* <article className='banner-img'>
              <div className='banner-pic-container'>
                <img src={image1} alt='profile' />
                <Carousel />
              </div>
            </article> */}
            <article className='img-slider-frame'>
              <div>
                <ImageSlider slides={slides} />
              </div>
              {/* <div style={containerStyles}>
                <ImageSlider slides={slides} />
              </div> */}
            </article>
          </div>
        </div>
      </section>
      {/* OVERVIEW END */}

      {/* {testimonials start} */}
      {/* testimonials */}
      <section className='light-lavender'>
        <div style={{ paddingTop: '3rem' }}>
          <h1 className='section-title'>Testimonials</h1>
        </div>
        <div className='section-center' style={{ paddingTop: '0' }}>
          {/* 1st testimonial */}
          <div className='flex-container'>
            <article className='testimonial-text'>
              <blockquote>
                <p>
                  Ms. Olga has been mentoring my two daughters since 2020. She
                  is strict, patient, and encouraging. Her lessons are tailored
                  to each student’s interests and characteristics. She
                  encourages my daughters to participate in different recitals
                  and competitions. Over time these experiences build up their
                  confidence. We are very lucky to have her as our piano
                  teacher.
                </p>
              </blockquote>
            </article>
            <div className='section-text'>
              {/* <article className='banner-img testimonial-img'>
                <div className='banner-pic-container'>
                  <img src={image1} alt='profile' />
                </div>
              </article> */}
              <h3>
                - Zixin Lou <br /> (mom of Angelina and Alice)
              </h3>
            </div>
          </div>
        </div>
        {/* 2nd testimonial */}
        <div className='lavender'>
          <div className='section-center'>
            <div className='flex-container flex-reverse'>
              <article className='testimonial-text'>
                <blockquote>
                  <p>
                    Mrs. Olga is the best piano teacher I’ve ever had, and every
                    lesson was filled with her passion and enthusiasm. She cares
                    and loves every single one of her students, and she really
                    tries her best to understand and support us. Mrs. Olga
                    treats us like her own children. She influenced me to not
                    only be a great pianist but also to be a great person.
                  </p>
                </blockquote>
              </article>
              <div className='section-text'>
                <h3>- Wanrui Huang</h3>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd testimonial */}
        <div>
          <div className='section-center'>
            <div className='flex-container'>
              <article className='testimonial-text'>
                <blockquote>
                  <p>
                    Dr. Olga Berkovich is an exceptional music professor who
                    deeply cares about every student she teaches. She tirelessly
                    strives to find creative ways to spark genuine, lifelong
                    appreciation of classical music both for students and their
                    parents! We truly feel privileged to be chiseling our
                    musical abilities under Mrs. Berkovich’s gentle yet steady
                    hand. My children came to Mrs. Berkovich with Faber
                    repertoire two years ago, playing the simplest songs - now,
                    they play complex musical pieces and take part in stage
                    concerts and competitions.
                  </p>
                  <p>
                    Most importantly, it delights me as a mother to see my
                    children grow in appreciation of beauty in music, becoming
                    sensitive and deeper humans as a result of diligent
                    consistent practice. Mrs. Berkovich puts her best efforts to
                    have her students taste the sweet fruit of competence and
                    success, to have them recognize that hard work really pays
                    off - I personally consider it the greatest reward in our
                    music learning journey. Over time, through regular and
                    consistent piano lessons, my children are not only getting a
                    taste of timeless musical works but becoming more and more
                    aware of their own truly limitless potential, all thanks to
                    the Mrs. Olga Berkovich superb musical mastery, passionate
                    commitment and gentle sensitivity with each child.
                  </p>
                </blockquote>
              </article>
              <div className='section-text'>
                <h3>- Anna Slonevskiy</h3>
              </div>
            </div>
          </div>
        </div>
        {/* 4th testimonial */}
        <div className='lavender'>
          <div className='section-center'>
            <div className='flex-container flex-reverse'>
              <article className='testimonial-text'>
                <blockquote>
                  <p>
                    When I started taking piano lessons with Olga four years
                    ago, my attitude towards music changed completely. Her
                    energy motivated me to practice and love the music that I
                    was playing. Within a few months after switching to Olga as
                    my teacher, I placed second in my first ever competition.
                    Over the following years, I grew so much as a musician
                    thanks to her passion for teaching and attention to detail.
                    She always found ways to take my playing to the next level
                    and put in every effort to help me improve, from finding
                    masterclasses to showing me the organ. I am most grateful to
                    Olga for what she has taught me and for sharing her love for
                    music with me.
                  </p>
                </blockquote>
              </article>
              <div className='section-text'>
                <h3>- Timothy Kulchitsky (student)</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <Carousel /> */}
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
      </section>
      {/* testimonials end */}
      <section className='questions magnolia'>
        <div className='questions-container'>
          <h1 className='section-title'>FAQs</h1>
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
