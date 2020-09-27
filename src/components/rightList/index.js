import React from 'react'
import PropTypes from 'prop-types'
import List from './rightList.js'
import './style/index.scss'

function RightList(props) {
  
  const { dataSource, rowClickEvent } = props
  
  return (
    <div className='big-data-right'>
      <List dataSource = {dataSource} rowClickEvent={rowClickEvent}/>
    </div>
  )
}

RightList.propTypes = {
  dataSource: PropTypes.object, // 显示数据
  rowClickEvent: PropTypes.func // 行内数据点击事件
}

export default RightList