import React from 'react'
import { Row, Col } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './style/index.scss'

function Content(props) {
  const props1 = {
    list: [{
      rank: 1,
      changeRank: 4,
      place: '福田区',
      percent: '37%',
      changePercent: '+6%'
    }]
  }

  const rowLayout= {
    justify: 'center',
    align:'middle',
  }

  const colLayout = {
    span: 12,
  }

  const arrowIcon = (val) => { // 上升或下降箭头
    if (val > 0) {
      return (
        <ArrowDownOutlined style={{ fontSize: '12px', color: '#83FF00' }}/>
        )
    } else if(val< 0) {
      return (
        <ArrowUpOutlined style={{ fontSize: '12px', color: '#FF4848' }}/>
      )
    }
  }

  const list = () => {

  }
  return (
    <div className='right-wrap'>
      <ul className='list'>
        <li className='list-li'>
          <div className='wrap'>
            <Row {...rowLayout} style={{ height: '100%' }}>
              <Col span={4} >
                <div className='rank'>
                  <span className='rank-text'>1</span>
                  <span className='change-rank'>{arrowIcon(4)}4</span>
                </div>
              </Col>
              <Col span={11} offset={1}>
                <div className='place'>
                  福田区
                </div>
              </Col>
              <Col span={4}>
                <div className='pencent'>
                  37%
                </div>
              </Col>
              <Col span={3} offset={1}>
                <div className='change-pencent'>
                  <span>+6%</span>
                  <span>{arrowIcon(4)}</span>
                </div>
              </Col>
            </Row>
          </div>
          <div className='drop-wrap'>
            <Row {...rowLayout} style={{ height: '100%' }}>
              <Col {...colLayout}>
                <div className='wrap-LB'>
                  <span>135km</span>
                  <span className='text'>偏移里程</span>
                </div>
              </Col>
              <Col {...colLayout}>
                  <div className='wrap-RB'>
                    <span>2135km</span>
                    <span className='text'>总里程</span>
                  </div>
              </Col>
            </Row>
          </div>
        </li>
      </ul>
    </div>
  )
} 

export default Content