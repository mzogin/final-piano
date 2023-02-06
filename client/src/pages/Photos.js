import React from 'react'
import '../assets/css/pictures.css'

// import { ImageGroup, Image } from 'react-fullscreen-image'
import { Gallery } from '../components/Gallery'
import { importImages } from '../utils/importImages'

export const Photos = () => {
  const images = importImages(
    require.context('../assets/images/photos', false, /\.(png|jpe?g|svg)$/)
  )

  return (
    <div className='container'>
      <section className='photos-section'>
        <div className='section-center initial-section'>
          <Gallery galleryImages={images} />
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
