import React from 'react'
import { Row, Col } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './style/index.scss'

function Content(props) {

  const { dataSource } = props
  const rowLayout= {
    justify: 'center',
    align:'middle',
  }

  const colLayout = {
    span: 12,
  }

  let lastEle = undefined

  const handleClickEvent = (e,item) => {
    if (lastEle) {
      lastEle.style.height = '0px'
    }
    lastEle = e.currentTarget.getElementsByClassName('drop-wrap')[0]
    lastEle.style.height = '92px'
  }

  const arrowIcon = (val) => { // 上升或下降箭头
    val = parseInt(val)
    if (val > 0) {
      return (
          <ArrowUpOutlined style={{ fontSize: '12px', color: '#FF4848' }}/>
        )
      } else if(val< 0) {
        return (
          <ArrowDownOutlined style={{ fontSize: '12px', color: '#83FF00' }}/>
      )
    }
  }

  const handleAnimationEndEvent = (e)=> {
    console.log(111)
    // e.currentTarget.remove()
  }

  const createListTemplate = (sourceData,name) => {
    return (
      sourceData.map((item, index) => {
        return (
          <li className={name} key={index} onClick={(e) => {handleClickEvent(e,item)}} style={{ animationDelay: (0.15*index + 's')}}>
            <div className='wrap'>
              <Row {...rowLayout} style={{ height: '100%' }}>
                <Col span={4} >
                  <div className='rank' style={{ background: (index < 3) ? '' : 'none'}}>
                    <span className='rank-text'>{item.rank}</span>
                    <span className='change-rank'>{arrowIcon(item.changeRank)}{Math.abs(item.changeRank)}</span>
                  </div>
                </Col>
                <Col span={11} offset={1}>
                  <div className='place'>
                    {item.place}
                  </div>
                </Col>
                <Col span={4}>
                  <div className='pencent'>
                    {item.percent}
                  </div>
                </Col>
                <Col span={3} offset={1}>
                  <div className='change-pencent'>
                    <span>{item.changePercent}</span>
                    <span>{arrowIcon(item.changePercent)}</span>
                  </div>
                </Col>
              </Row>
              {/* <div className='hover-flag'></div> */}
            </div>
            <div className='drop-wrap'>
              <Row {...rowLayout} style={{ height: '100%' }}>
                <Col {...colLayout}>
                  <div className='wrap-LB'>
                    <span>{item.migrationDistance}</span>
                    <span className='text'>偏移里程</span>
                  </div>
                </Col>
                <Col {...colLayout}>
                    <div className='wrap-RB'>
                      <span>{item.totalMigrationDistance}</span>
                      <span className='text'>总里程</span>
                    </div>
                </Col>
              </Row>
            </div>
          </li>
        )
      }) 
    )
  }

  const toggleEles = (dataSource, name, innername) => {
    return (
      <ul className={ name } onAnimationEnd = {(e) => {handleAnimationEndEvent(e)}}>
        {createListTemplate(dataSource.list, innername)}
      </ul>
    )
  }

  return (
    <div className='list-wrap'>
      <ul className='list out-front'>
        {createListTemplate(dataSource.list,'list-li spin')}
      </ul>
      {/* <ul className='list out-right'>
        {createListTemplate(dataSource.list,'list-li spin-two')}
      </ul> */}
      {/* { toggleEles(dataSource,'list out-front','list-li spin') } */}
      { toggleEles(dataSource,'list out-right','list-li spin-two') }
    </div>
  )
} 

export default Content