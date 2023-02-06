import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { FaChevronRight, FaChevronLeft, FaRegWindowClose } from 'react-icons/fa'

export const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  // const wrapperRef = useRef(null)
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const handlePrevSlide = useCallback(() => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1)
  }, [slideNumber, galleryImages.length])

  const handleNextSlide = useCallback(() => {
    slideNumber === galleryImages.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  }, [slideNumber, galleryImages.length])

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handlePrevSlide()
    }
    if (isRightSwipe) {
      handleNextSlide()
    }
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal()
      }
      if (e.key === 'ArrowLeft') {
        handlePrevSlide()
      }
      if (e.key === 'ArrowRight') {
        handleNextSlide()
      }
    }
    if (openModal) {
      window.addEventListener('keydown', handleKey)
    } else {
      window.removeEventListener('keydown', handleKey)
    }
    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [openModal, slideNumber, handleNextSlide, handlePrevSlide])

  return (
    <div>
      {openModal && (
        <div
          className='slide-wrapper'
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <FaRegWindowClose
            className='close-slide'
            onClick={handleCloseModal}
          />

          <FaChevronLeft className='prev-slide' onClick={handlePrevSlide} />
          <FaChevronRight className='next-slide' onClick={handleNextSlide} />
          <div className='fullscreen-img'>
            <img src={galleryImages[slideNumber]} alt='' />
            {/* <img src={galleryImages[slideNumber].img} alt='' /> */}
          </div>
        </div>
      )}
      <div className='gallery-wrapper'>
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className='single-gallery-img'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide} alt='' />
                {/* <img src={slide.img} alt='' /> */}
              </div>
            )
          })}
      </div>
    </div>
  )
}
