import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import VideoLib from 'video.js'
import 'video.js/dist/video-js.css'
import './index.scss'

Video.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  poster: PropTypes.string,
  width: PropTypes.number || PropTypes.string,
  height: PropTypes.number || PropTypes.string
}

Video.defaultProps = {
  width: 840,
  height: 436
}

function Video (props) {
  const { id, url, type, width, height, poster } = props
  useEffect(() => {
    const player = new VideoLib(id)
    return () => {
      player.dispose()
    }
  })

  return (
    <div className='video-content'>
      <video
        className='video-js vjs-big-play-centered'
        controls
        preload='auto'
        id={id}
        width={width}
        height={height}
        poster={poster}
        data-setup='{}'
      >
        <source src={url} type={type} />
        <p className='vjs-no-js'>
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
        </p>
      </video>
    </div>
  )
}

export default Video
