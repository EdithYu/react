import React from 'react'
import { Button } from 'antd'
import List from '../../components/leftList'
import { queryAllAreaCarMigrationData } from '../../services/gpsservice'

// const content = (count) => {
//   const list = []
//   for (let i = 0; i < count; i++) {
//     list.push({
//       rank: i + 1,
//       changeRank: Math.floor((Math.random() * 20)) - 10,
//       place: 'loading',
//       percent: 'load',
//       changePercent: '+0%',
//       migrationDistance: '135km', // 偏移里程
//       totalMigrationDistance: '2135km' // 总里程
//     })
//   }
//   return list
// }

// const testData = {
//   header: {
//     title: '偏移数据总览', // title名称
//     migrationPercent: '11.5%', // 偏移率
//     comparePercent: '+6%', // 比较
//     migrationDistance: '135km', // 偏移里程
//     totalMigrationDistance: '2135km' // 总里程
//   },
//   list: content(15)
// }

const test = () => {
  return {
    header: {
      title: '偏移数据总览', // title名称
      migrationPercent: '11.5%', // 偏移率
      comparePercent: '+0%', // 比较
      migrationDistance: '135km', // 偏移里程
      totalMigrationDistance: '2135km' // 总里程
    },
    list: [
      {
        rank: 1,
        changeRank: 0,
        place: '福田区',
        percent: '37%',
        changePercent: '+0%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 2,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 3,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 4,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 5,
        changeRank: 4,
        place: '福田郊外休闲区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 6,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 7,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 8,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 9,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 10,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 11,
        changeRank: -4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 12,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 13,
        changeRank: -4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 14,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      },
      {
        rank: 15,
        changeRank: 4,
        place: '福田区',
        percent: '37%',
        changePercent: '+6%',
        migrationDistance: '135km', // 偏移里程
        totalMigrationDistance: '2135km' // 总里程
      }
    ]
  }
}

class TestLeftList extends React.Component {
  state = {
    dataSource: test()
  }

  componentDidMount () {
    this.getAllAreaCarMigrationData()
  }

  getAllAreaCarMigrationData = () => {
    queryAllAreaCarMigrationData().then((data) => {
      console.log(data)
    })
  }

  rowClickEvent = (data) => {
    console.log(data)
  }

  handleTest = () => {
    this.setState({
      dataSource: test()
    })
  }

  render () {
    const { dataSource } = this.state
    return (
      <div>
        <List
          dataSource={dataSource}
          rowClickEvent={this.rowClickEvent}
        />
        <Button onClick={this.handleTest} style={{ position: 'absolute', left: '500px', top: '100px' }}>测试leftcontent</Button>
      </div>
    )
  }
}

export default TestLeftList
