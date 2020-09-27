import React from 'react'
import { Row, Col } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, ArrowRightOutlined } from '@ant-design/icons'
import './style/index.scss'

const rowLayout= {
  justify: 'center',
  align:'middle',
}

const colLayout = {
  span: 12,
}

let lastEle = undefined

const content  = (count) => {
  let list = []
  for (let i=0; i<count; i++) {
    list.push({
      rank: 1,
      changeRank: -4,
      place: 'loading',
      percent: 'load',
      changePercent: '+6%',
      migrationDistance: '135km', // 偏移里程
      totalMigrationDistance: '2135km' // 总里程
    })
  }
  return list
}

class Content extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      listWrapName: 'list-wrap',
      listLiName: 'list-li',
      listRightName: 'list out-right',
      listFrontName: 'list out-front',
      turnDataSource: content(15)
    }
  }

  componentDidMount() {
    this.refresh()
  }

  componentWillReceiveProps(props) {
    this.refresh()
  }

  handleClickEvent = (e,item) => {
    if (lastEle) {
      lastEle.style.height = '0px'
    }
    lastEle = e.currentTarget.getElementsByClassName('drop-wrap')[0]
    lastEle.style.height = '92px'
    this.props.rowClickEvent(item)
  }

  arrowIcon = (val) => { // 上升或下降箭头
    val = parseInt(val)
    if (val > 0) {
      return (
        <ArrowUpOutlined style={{ fontSize: '12px', color: '#FF4848' }}/>
      )
    } else if(val< 0) {
      return (
        <ArrowDownOutlined style={{ fontSize: '12px', color: '#83FF00' }}/>
      )
    } else {
      return 
      // (
      //   <ArrowRightOutlined style={{ fontSize: '12px', color: '#bfbfbf' }}/>
      // )
    }
  }

  changeRankText = (val) => { // 上升或下降箭头
    if (val === 0) {
      return ''
     } else {
      return Math.abs(val)
    }
  } 

  handleAnimationStartEvent = (e) => {
    // if (e.target.className === 'list-li turn-li-spin') {
    //   e.target.style.visibility = 'visible'
    // }
  }

  handleAnimationEndEvent = (e)=> { // 处理动画结束事件
    if (e.target.className === 'list-wrap spin') {
      this.setState({
        listWrapName: 'list-wrap',
        listLiName: 'list-li',
        turnlistLiName: 'list-li',
        turnDataSource: this.props.dataSource
      })
    }

    // if (e.target.className === 'list-li turn-li-spin') {
    //   e.target.style.visibility = 'hidden'
    // }
  }

  createListTemplate = (sourceData,name) => { //创建list
    return (
      sourceData.map((item, index) => {
        return (
          <li className={name} key={index} onClick={(e) => {this.handleClickEvent(e,item)}} style={{ animationDelay: (0.15*index + 's')}}>
            <div className='wrap'>
              <Row {...rowLayout} style={{ height: '100%' }}>
                <Col span={4} >
                  <div className='rank' style={{ background: (index < 3) ? '' : 'none'}}>
                    <span className='rank-text'>{item.rank}</span>
                    <span className='change-rank'>{this.arrowIcon(item.changeRank)}{this.changeRankText(item.changeRank)}</span>
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
                    <span>{this.arrowIcon(item.changePercent)}</span>
                  </div>
                </Col>
              </Row>
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

  /**
   * 根据参数传入不同list
   * @param {Array} dataSource 数据源
   * @param {String} name list整体的的classname
   * @param {String} innername list里面每行数据的className
   */
  toggleEles = (dataSource, name, innername) => {
    return (
      <ul className={ name } >
        {this.createListTemplate(dataSource, innername)}
      </ul>
    )
  }

  refresh = () => {
    const { listFrontName, listRightName } = this.state
    document.getElementsByClassName(listRightName)[0].scrollTop = document.getElementsByClassName(listFrontName)[0].scrollTop
    this.setState({
      listWrapName: 'list-wrap spin',
      listLiName: 'list-li li-spin',
      turnlistLiName: 'list-li turn-li-spin'
    })
  }

  render () {
    const { listWrapName, listLiName, listRightName, listFrontName,turnDataSource, turnlistLiName } = this.state
    const { dataSource } = this.props
    return (
      <div 
        className={ listWrapName } 
        onAnimationEnd = {(e) => {this.handleAnimationEndEvent(e)}}
        onAnimationStart = {(e) => {this.handleAnimationStartEvent(e)}}
        onAnimationIteration = {(e) => {this.handleAnimationIterationEvent(e)}}
      >
        { this.toggleEles(dataSource,listRightName,listLiName) }
        { this.toggleEles(turnDataSource,listFrontName,turnlistLiName) }
      </div>
    )
  } 
} 

export default Content