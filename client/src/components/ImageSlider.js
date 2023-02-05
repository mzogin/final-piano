import React from 'react'
import { useState, useEffect } from 'react'

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
  }

  // const carouselInfiniteScroll = () => {
  //   if (currentIndex === slides.length - 1) {
  //     return setCurrentIndex(0)
  //   }
  //   return setCurrentIndex(currentIndex + 1)
  // }
  useEffect(() => {
    const interval = setInterval(() => {
      // carouselInfiniteScroll()
      nextSlide()
    }, 10000)
    // cleanup
    return () => clearInterval(interval)
  })
  // const sliderStyles = {
  //   height: '100%',
  // }
  // const slideStyles = {
  //   width: '100%',
  //   height: '100%',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundImage: `url(${slides[currentIndex]})`,
  // }

  return (
    <section className='image-slider'>
      {slides.map((slide, index) => {
        return (
          <div
            className={`slider-slide ${
              index === currentIndex ? 'active-slide' : ''
            }`}
            key={index}
          >
            {index === currentIndex && (
              <img className='slider-img' src={slide} alt='slide show'></img>
            )}
          </div>
        )
      })}
    </section>
    // <div style={sliderStyles}>
    //   <div className={`image-slide`} style={slideStyles}></div>
    // </div>
  )
}
