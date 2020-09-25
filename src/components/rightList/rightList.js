import React from 'react'
import { Row, Col, Button} from 'antd'
// import { DownloadOutlined } from '@ant-design/icons'
import './style/index.scss'
import 'antd/dist/antd.css'

const rowLayout= { // 下拉弹出框的头部
  justify: 'center',
  align:'middle',
  gutter:[16, 16]
}

const listRowLayout= { // 正常列表
  justify: 'left',
  align:'middle',
}

const droplistRowLayout= { // 下拉弹出框的列表
  justify: 'space-between',
  align:'middle',
}

const colLayout = {
  span: 12,
}

let lastEle = undefined

class RightList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentName: 'content',
      size: 'default',
      btnTextClassName: 'btn-text-select',
      otherBtnTextClassName: 'btn-text',
      testData: { // 下拉展示数据
        migrationDistance: '135', // 偏移里程
        totalMigrationDistance: '2135', // 总里程
        listData: [
          {
            plateNumber: '苏A23456', // 车牌号
            carMigrationDistance: '45km', // 单个牌照偏移里程
            carTotalMigrationDistance: '675km', // 单个牌照总里程
            carMigrationPercent: '13', // 单个汽车偏移率
          },
          {
            plateNumber: '苏A23456', // 车牌号
            carMigrationDistance: '45km', // 单个牌照偏移里程
            carTotalMigrationDistance: '675km', // 单个牌照总里程
            carMigrationPercent: '13', // 单个汽车偏移率
          },
          {
            plateNumber: '苏A23456', // 车牌号
            carMigrationDistance: '45km', // 单个牌照偏移里程
            carTotalMigrationDistance: '675km', // 单个牌照总里程
            carMigrationPercent: '13', // 单个汽车偏移率
          },
          {
            plateNumber: '苏A23456', // 车牌号
            carMigrationDistance: '45km', // 单个牌照偏移里程
            carTotalMigrationDistance: '675km', // 单个牌照总里程
            carMigrationPercent: '13', // 单个汽车偏移率
          }
        ]
      }
    }
  }

  componentDidMount() {
    this.refresh()
  }

  componentWillReceiveProps(props) {
    this.refresh()
  }

  refresh = () => {
    
  }

  handleClickEvent = (e, item) => {
    if (lastEle) {
      lastEle.style.display = 'none'
    }
    lastEle = e.currentTarget.getElementsByClassName('drop-wrap')[0]
    lastEle.style.display = 'block'
    this.props.rowClickEvent(item)
  }

  getRankBackground = (index) => { // rank排名背景色
    if (index === 1) {
      return 'linear-gradient(to bottom right, #ff7600, #FB1111FF, #FF22001A 50%, #FF00001A 50%, #00000000 50.00001%, #00000000 100%)'
    } else if (index === 2) {
      return 'linear-gradient(to bottom right, #e68b19, #d42513, #FF22001A 50%, #FF00001A 50%, #00000000 50.00001%, #00000000 100%)'
    } else if (index === 3) {
      return 'linear-gradient(to bottom right, #FBBC11FF, #FFB1001A 50%, #00000000 50.00001%, #00000000 100%)'
    } else {
      return 'linear-gradient(to bottom right, #11AEFBFF, #00FBFF1A 50%, #00000000 50.00001%, #00000000 100%)'
    }
  }

  createTopTemplate = (dataSource,contentName) => {
    const { totalCar, totalCompany, workTotalCar ,workTotalCompany} = dataSource
    return (
      <div className={contentName}>
        <Row {...rowLayout}>
          <Col {...colLayout}>
            <div className='wrap-L'>
              <span>{totalCar}<span className='unit'>辆</span> / {totalCompany}<span className='unit'>家</span></span>
              <span className='text'>总车辆/企业</span>
            </div>
          </Col>
          <Col {...colLayout}>
              <div className='wrap-R'>
                <span>{workTotalCar}<span className='unit'>辆</span> / {workTotalCompany}<span className='unit'>家</span></span>
                <span className='text'>作业车辆/企业</span>
              </div>
          </Col>
        </Row>
      </div>
    )
  }

  createListTemplate = (sourceData, testData) => { //创建list
    const length = sourceData.length
    return (
      sourceData.map((item, index) => {
        return (
          <li 
            className='list-li'
            key={index}
            onClick={(e) => {this.handleClickEvent(e,item)}}
            style={{ borderColor: item.areaFlag === 0? '#2CD4F9' : '',marginBottom : index === length-1 ?  '0px' : ''}}>
            <div className='wrap'>
              <Row {...listRowLayout} style={{ height: '100%' }}>
                <Col span={4}  style={{ height: '100%' }}>
                  <div className='rank' style={{ background: this.getRankBackground(item.rank)}}>
                    <span className='rank-text'>{item.rank}</span>
                  </div>
                </Col>
                <Col span={11} offset={1}>
                  <div className='place'>
                    {item.companyName}
                  </div>
                </Col>
                <Col span={4}>
                  <div className='number'>
                    <span>{item.migrationCount}</span>
                    <span className='unit'>辆</span>
                  </div>
                </Col>
                <Col span={3} offset={1}>
                  <div className='pencent'>
                    <span>{item.migrationPercent}</span>
                    <span className='unit'>%</span>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='drop-wrap'>
              <div>
                <Row {...rowLayout} style={{ height: '100%' }}>
                  <Col >
                    <div className='wrap-LL'>
                        <span>{testData.migrationDistance}</span>
                    </div>
                  </Col>
                  <Col>
                    <div className='wrap-LM'>
                      <span className='text'>km</span>
                      <span className='text'>偏移里程</span>
                    </div>
                  </Col>
                  <Col>
                    <div className='wrap-M'>/</div>
                  </Col>
                  <Col>
                      <div className='wrap-MR'>
                        <span>{testData.totalMigrationDistance}</span>
                      </div>
                  </Col>
                  <Col>
                    <div className='wrap-RR'>
                      <span className='text'>km</span>
                      <span className='text'>偏移里程</span>
                    </div>
                  </Col>
                </Row>
              </div>
              { this.createDropListTemplate(testData.listData,item.areaFlag) }
            </div>
          </li>
        )
      }) 
    )
  }

  createDropListTemplate = (sourceData,areaFlag) => {
    // const length = sourceData.length
    return (
      sourceData.map((item, index, length) => {

        return (
          <div className='droplist-li' key={index} style={{borderBottomColor: areaFlag ? '' : '#2CD4F9'}}>
            <Row {...droplistRowLayout} style={{ height: '100%' }}>
              <Col >
                <div className='L'>
                    <span>{item.plateNumber}</span>
                </div>
              </Col>
              <Col>
                <div className='M'>
                  <span className='text-L'>{item.carMigrationDistance}</span>
                  <span className='text-M'> / </span>
                  <span className='text-R'>{item.carTotalMigrationDistance}</span>
                </div>
              </Col>
              <Col>
                <div className='R'>
                  <span className='text-L'>{item.carMigrationPercent}</span>
                  <span className='text-R'>%</span>
                </div>
              </Col>
            </Row>
          </div>
        )
      })
    )
  }

  render () {
    const { contentName, size ,btnTextClassName, otherBtnTextClassName, testData} = this.state
    const { list, header } = this.props.dataSource
    return (
      <div>
        <div className='header-wrap'>
          <div className='header'>{header.title}</div>
          { this.createTopTemplate(header,contentName)}
        </div>
        <div className='content-wrap'>
          <div className='header'>
            <div >运输企业偏移率排名</div>
            <div className='btn-wrap'>
              <Button type='primary' shape='round' size='small' className= {otherBtnTextClassName}>以车辆数排名</Button>
              <Button type='primary' shape='round' size='small' className= {btnTextClassName}>以偏移率排名</Button>
            </div>
          </div>
          <div className='list-wrap'>
            <ul className='list'>
              { this.createListTemplate(list, testData)}  
            </ul>
          </div>
        </div>
      </div>
    )
  }
} 

export default RightList