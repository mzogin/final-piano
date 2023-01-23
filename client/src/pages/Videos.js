import React from 'react'
// import { useGlobalContext } from '../context'
import { FaYoutube } from 'react-icons/fa'
// var Spinner = require('react-spinkit')
import { SingleVideo } from '../components/SingleVideo'

export const Videos = () => {
  const urls = [
    'https://www.youtube.com/embed/vgKpUWM1eks',
    'https://www.youtube.com/embed/8emW5vsF66g',
    'https://www.youtube.com/embed/Vh9IWnKmU2k',
    'https://www.youtube.com/embed/rXd0UtpLi20',
    'https://www.youtube.com/embed/VgPbiaWAEbo',
    'https://www.youtube.com/embed/sXSEowvjTkg',
    'https://www.youtube.com/embed/7Sllr05EvLA',
    'https://www.youtube.com/embed/EfsQbXHkEEM',
    'https://www.youtube.com/embed/PI82mGt2qm8',
    'https://www.youtube.com/embed/-RCOjJ9At2o',
  ]
  // const { loading, videos } = useGlobalContext()
  // if (loading) {
  //   return (
  //     <section className='videos-section'>
  //       <div className='section-center initial-section'>
  //         <div className='loading'>
  //           <h1>Loading...</h1>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  return (
    <section className='videos-section'>
      <div className='section-center initial-section'>
        <div className='btn-container'>
          <a href='youtube.com' className='btn banner-btn youtube-btn'>
            {/* <i className='fa-brands fa-youtube'></i> */}
            <FaYoutube style={{ marginRight: '1rem' }} />
            youtube
          </a>
        </div>
        <div className='videos-grid'>
          {urls.map((url, index) => {
            return <SingleVideo url={url} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}