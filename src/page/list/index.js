import React from 'react'
import { Button } from 'antd'
import Header from './header.js'
import Content from './content.js'
import './style/index.scss'

function List() {
  const data = {
    header: {
      title: '偏移数据总览', // title名称
      migrationPercent: '11.5%', // 偏移率
      comparePercent: '+6%', // 比较
      migrationDistance: '135km', // 偏移里程
      totalMigrationDistance: '2135km' // 总里程
    },
    content: {
      list: [
        {
          rank: 1,
          changeRank: -4,
          place: '福田区',
          percent: '37%',
          changePercent: '+6%',
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
        },
      ]
    }
  }
  return (
    <div className='big-data'>
      <Header dataSource = {data.header}/>
      <Content dataSource = {data.content}/>
    </div>
  )
}

export default List