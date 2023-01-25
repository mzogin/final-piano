import React from 'react'
import '../assets/css/pictures.css'

// import { ImageGroup, Image } from 'react-fullscreen-image'
import { Gallery } from '../components/Gallery'

const galleryImages = [
  { img: require('../assets/images/pictures/pic1.jpg') },
  { img: require('../assets/images/pictures/pic2.jpg') },
  { img: require('../assets/images/pictures/pic3.jpg') },
  { img: require('../assets/images/pictures/pic4.jpg') },
  { img: require('../assets/images/piano.jpg') },
  { img: require('../assets/images/background/background.jpg') },
  { img: require('../assets/images/pictures/pic1.jpg') },
  { img: require('../assets/images/pictures/pic2.jpg') },
  { img: require('../assets/images/pictures/pic3.jpg') },
  { img: require('../assets/images/pictures/pic4.jpg') },
  { img: require('../assets/images/piano.jpg') },
  { img: require('../assets/images/background/background.jpg') },
]

export const Photos = () => {
  return (
    <div className='container'>
      <section className='photos-section'>
        <div className='section-center initial-section'>
          <Gallery galleryImages={galleryImages} />
          {/* <ImageGroup>
            <ul className='images'>
              {images.map((i, index) => (
                <li key={index}>
                  <Image
                    src={i}
                    alt='nature'
                  />
                </li>
              ))}
            </ul>
          </ImageGroup> */}
        </div>
      </section>
    </div>
  )
}
