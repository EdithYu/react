import React, { useState } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import ImageList from '../ImageList'
import Video from '../Video'

Player.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array,
  number: PropTypes.number,
  handleClickEvent: PropTypes.func
}

Player.defaultProps = {
}

function Player (props) {
  const [currentUrl, setCurrentUrl] = useState('')
  const [currentType, setcurrentType] = useState(1)
  const { width, height, poster, data, number } = props

  const handleClickEvent = (data) => {
    setcurrentType(data.type)
    setCurrentUrl(data.resourceUrl)
  }

  return (
    <div className='player-content'>
      {
        currentType === 1
          ? <Video
              width={width}
              height={height}
              poster={poster}
              src={currentUrl}
            />
          : <img src={currentUrl} alt='加载中' className='image' />
      }
      <ImageList
        className='image-list'
        data={data}
        number={number}
        handleClickEvent={handleClickEvent}
      />
    </div>
  )
}

export default Player
