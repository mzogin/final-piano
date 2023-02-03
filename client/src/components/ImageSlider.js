import React from 'react'
import { useState, useEffect } from 'react'

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = () => {
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll()
    }, 5000)
    // cleanup
    return () => clearInterval(interval)
  })
  const sliderStyles = {
    height: '100%',
    // position: 'relative',
    // border: '0.1rem solid #f5b69b',
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex]})`,
    // transition: 'all 3s cubic-bezier(0, 0, 1, 1)',
    // transition: 'all 2s ease-in-out',
    transition: 'background-image 2s linear',
  }

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
    </div>
  )
}
