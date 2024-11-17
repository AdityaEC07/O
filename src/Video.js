import React from 'react'

const Video = () => {
  return (
    <div>
        <video autoplay muted loop id="myVideo">
  <source src="rain.mp4" type="video/mp4">
</video>
    </div>
  )
}

export default Video