import React from 'react'
import { Row, Col} from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './style/index.scss'

function Header(props) {
  const { dataSource } = props

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
    <div className='header-wrap'>
      <div className='header'>{dataSource.title}</div>
      <div className='content'>
        <Row {...rowLayout} >
          <Col {...colLayout} >
            <div className='wrap-LT'>
              <span>{dataSource.migrationPercent}</span>
            </div>
          </Col>
          <Col {...colLayout}>
            <div className='wrap-RT'>
              <span>{dataSource.comparePercent}  </span>
              { arrowIcon(1) }
            </div>
          </Col>
        </Row>
        <Row {...rowLayout}>
          <Col {...colLayout}>
            <div className='wrap-LB'>
              <span>{dataSource.migrationDistance}</span>
              <span className='text'>偏移里程</span>
            </div>
          </Col>
          <Col {...colLayout}>
              <div className='wrap-RB'>
                <span>{dataSource.totalMigrationDistance}</span>
                <span className='text'>总里程</span>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  )
} 

export default Header