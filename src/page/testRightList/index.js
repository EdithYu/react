import React from 'react'
import { Button } from 'antd'
import List from '../../components/rightList'

const content  = (count) => {
  let list = []
  for (let i=0; i<count; i++) {
    list.push({
      rank: i+1, // 排名
      companyName: '大运发汽车运输有限公司', // 公司名称
      migrationPercent: '37', // 偏移率
      migrationCount: Math.floor((Math.random()*20)), // 偏移数量
      areaFlag: Math.floor((Math.random()*2)), // 区内外车辆，0区内 1区外
    })
  }
  return list
}

const testData = () => {
  return {
    header: {
      title: '深圳市数据总览', // title名称
      totalCar: 356, // 总车辆
      totalCompany: 56, // 总企业数
      workTotalCar: 188, // 作业车辆
      workTotalCompany: 48, // 作业企业
    },
    list: content(15)
  }
}

class TestList extends React.Component{
  state = {
    dataSource: testData()
  }

  rowClickEvent = (data)=> {
    console.log(data)
  }
  
  test = ()=> {
    this.setState({
      dataSource: testData()
    })
  }

  render () {
    const { dataSource } = this.state
    return (
      <div>
        <List 
          dataSource = {dataSource}
          rowClickEvent = {this.rowClickEvent}
        />
        <Button onClick={this.test} style={{position: 'absolute', right: '500px', top: '100px'}}>测试rightcontent</Button>
      </div>
    )
  }
}

export default TestList