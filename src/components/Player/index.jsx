import React, { useState } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import ImageList from '../ImageList'
import Video from '../Video'
import { Image } from 'antd'

Player.propTypes = {
  data: PropTypes.array,
  number: PropTypes.number
}

Player.defaultProps = {
}

function Player (props) {
  const [currentUrl, setCurrentUrl] = useState('')
  const [currentType, setcurrentType] = useState(1)
  const { data, number } = props

  const handleClickEvent = (data) => {
    setcurrentType(data.type)
    setcurrentType(data.type)
    setCurrentUrl(data.resourceUrl)
  }

  return (
    <div className='player-content'>
      {
        currentType === 1
          ? <Video
              src={currentUrl}
            />
          : <Image src={currentUrl} alt='加载中' className='image' height={280} />
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
