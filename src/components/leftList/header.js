import React from 'react'
import { Row, Col } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './style/index.scss'

const rowLayout = {
  justify: 'left',
  align: 'bottom'
}

const colLayout = {
  span: 12
}
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contentFrontName: 'content out-front',
      contentRightName: 'content out-right',
      outerName: '',
      turnDataSource: {
        title: '偏移数据总览', // title名称
        migrationPercent: '11.5%', // 偏移率
        comparePercent: '+6%', // 比较
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      }
    }
  }

  componentDidMount () {
    this.refresh()
  }

  componentWillReceiveProps (props) {
    this.refresh()
  }

  arrowIcon = (val) => { // 上升或下降箭头
    val = parseFloat(val)
    if (val > 0) {
      return (
        <ArrowUpOutlined style={{ fontSize: '16px', color: '#FF4848' }} />
      )
    } else if (val < 0) {
      return (
        <ArrowDownOutlined style={{ fontSize: '16px', color: '#83FF00' }} />
      )
    } else {
      return ''
      // (
      //   <ArrowRightOutlined style={{ fontSize: '16px', color: '#bfbfbf' }}/>
      // )
    }
  }

  handleAnimationEndEvent = (e) => { // 处理动画结束事件
    if (e.target.className === 'spin') {
      this.setState({
        outerName: '',
        liName: '',
        turnDataSource: this.props.dataSource
      })
    }
  }

  refresh = () => {
    this.setState({
      outerName: 'spin',
      liName: 'li-spin'
    })
  }

  createTemplate = (dataSource, contentName, liName) => {
    return (
      <div className={contentName}>
        <div className={liName}>
          <Row {...rowLayout}>
            <Col {...colLayout}>
              <div className='wrap-LT'>
                <span>{dataSource.migrationPercent}</span>
              </div>
            </Col>
            <Col {...colLayout}>
              <div className='wrap-RT'>
                <span>{dataSource.comparePercent}  </span>
                {this.arrowIcon(dataSource.comparePercent)}
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

  render () {
    const { contentFrontName, contentRightName, turnDataSource, outerName, liName } = this.state
    const { dataSource } = this.props
    return (
      <div className='header-wrap'>
        <div className='header'>{dataSource.title}</div>
        <div className={outerName} onAnimationEnd={(e) => { this.handleAnimationEndEvent(e) }}>
          {this.createTemplate(dataSource, contentRightName, liName)}
          {this.createTemplate(turnDataSource, contentFrontName, liName)}
        </div>
      </div>
    )
  }
}

export default Header
