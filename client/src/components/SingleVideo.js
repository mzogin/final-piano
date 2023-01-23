import React from 'react'
import { useState } from 'react'
import Spinner from 'react-spinkit'

export const SingleVideo = ({ url }) => {
  const [loading, setLoading] = useState(true)
  const hideSpinner = () => {
    setLoading(false)
  }
  return (
    <div className='youtube-vid-container'>
      {loading ? (
        <div className='spinner-container'>
          <Spinner
            className='loading text-center'
            name='three-bounce'
            color='pink'
            fadeIn='none'
          />
        </div>
      ) : null}
      <iframe
        width='560'
        height='315'
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        onLoad={hideSpinner}
      ></iframe>
    </div>
  )
}
