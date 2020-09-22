import React from 'react'
import { Row, Col} from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './style/index.scss'

function Header(props) {
  const props1 = {
    title: '偏移数据总览', // title名称
    migrationPercent: '11.5%', // 偏移率
    comparePercent: '+6%', // 比较
    migrationDistance: '135km', // 偏移里程
    totalMigrationDistance: '2135km' // 总里程
  }

  const rowLayout= {
    justify: 'left',
    align:'bottom',
  }

  const colLayout = {
    span: 12,
  }

  const arrowIcon = (val) => { // 上升或下降箭头
    if (val > 0) {
      return (
        <ArrowDownOutlined style={{ fontSize: '16px', color: '#83FF00' }}/>
        )
    } else if(val< 0) {
      return (
        <ArrowUpOutlined style={{ fontSize: '16px', color: '#FF4848' }}/>
      )
    }
  }

  return (
    <div className='right-wrap'>
      <div className='header'>{props1.title}</div>
      <div className='content'>
        <Row {...rowLayout} >
          <Col {...colLayout} >
            <div className='wrap-LT'>
              <span>{props1.migrationPercent}</span>
            </div>
          </Col>
          <Col {...colLayout}>
            <div className='wrap-RT'>
              <span>{props1.comparePercent}  </span>
              { arrowIcon(1) }
            </div>
          </Col>
        </Row>
        <Row {...rowLayout}>
          <Col {...colLayout}>
            <div className='wrap-LB'>
              <span>{props1.migrationDistance}</span>
              <span className='text'>偏移里程</span>
            </div>
          </Col>
          <Col {...colLayout}>
              <div className='wrap-RB'>
                <span>{props1.totalMigrationDistance}</span>
                <span className='text'>总里程</span>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  )
} 

export default Header