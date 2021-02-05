import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { message } from 'antd'
import './index.scss'

ImageList.propTypes = {
  data: PropTypes.array,
  number: PropTypes.number,
  handleClickEvent: PropTypes.func
}

ImageList.defaultProps = {
  data: [],
  number: 6,
  handleClickEvent: () => {}
}

function ImageList (props) {
  const { data, number } = props
  const [showIndex, setShowIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleRightClick = () => {
    if (showIndex + number >= data.length) {
      return message.warning('当前已经是最后一张')
    }
    setShowIndex(showIndex + 1)
    setSelectedIndex(selectedIndex - 1)
  }

  const handleLeftClick = () => {
    if (showIndex === 0) {
      return message.warning('当前已经是第一张')
    }
    setShowIndex(showIndex - 1)
    setSelectedIndex(selectedIndex + 1)
  }

  const handleClickEvent = (index, item) => {
    setSelectedIndex(index)
    props.handleClickEvent(item)
  }

  const getShowData = () => {
    if (data.length > number) {
      return data.slice(0 + showIndex, number + showIndex)
    }
  }

  return (
    <div className='imagelist-content'>
      <div className='border left-arror' onClick={() => handleLeftClick()}>
        <LeftOutlined className='arror' />
      </div>
      <div className='img-content'>
        {
          getShowData().map((item, index) => {
            return (
              <div className='img-box' key={index}>
                {
                  selectedIndex === index ? <div className='trangle' /> : null
                }
                <img src={item.imgUrl} alt='加载中' onClick={() => handleClickEvent(index, item)} className={selectedIndex === index ? 'selected' : ''} />
              </div>
            )
          })
        }
      </div>
      <div className='border right-arror' onClick={() => handleRightClick()} disabled>
        <RightOutlined className='arror' />
      </div>
    </div>
  )
}

export default ImageList
