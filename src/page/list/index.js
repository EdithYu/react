import React from 'react'
import PropTypes from 'prop-types'
import Header from './header.js'
import Content from './content.js'
import './style/index.scss'

function List(props) {
  
  const { dataSource, rowClickEvent } = props
  
  return (
    <div className='big-data'>
      <Header dataSource = {dataSource.header} />
      <Content dataSource = {dataSource.list} rowClickEvent={rowClickEvent}/>
    </div>
  )
}

List.propTypes = {
  dataSource: PropTypes.object, // 显示数据
  rowClickEvent: PropTypes.func // 行内数据点击事件
}

export default List