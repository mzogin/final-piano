import React, { useEffect, useState } from 'react'
// import './Carousel.css'
import '../index.css'

export const Carousel = () => {
  const data = ['Review 1', 'Review 2', 'Review 3', 'Review 4']
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll()
    }, 7000)
    // cleanup
    return () => clearInterval(interval)
  })

  return (
    <div className='carousel-container'>
      {data.map((item, index) => {
        return (
          <div
            className='carousel-item'
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <div className='testimonial'>
              <h3>{item}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                voluptatibus illum? Consectetur dolore placeat natus eaque
                officiis aspernatur tempora vitae?
              </p>
              <h4>- from (insert name)</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}
