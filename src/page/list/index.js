import React from 'react'
import { Button } from 'antd'
import Header from './header.js'
import Content from './content.js'
import './style/index.scss'
function List() {
  return (
    <div className='big-data'>
      <Header />
      <Content />
    </div>
  )
}

export default List