import React from 'react'
import { VirtualTable } from '@/components'
function testVirtualTable () {
  const columns = [
    {
      title: 'A',
      dataIndex: 'key'
      // width: 150,
    },
    {
      title: 'B',
      dataIndex: 'key'
    },
    {
      title: 'C',
      dataIndex: 'key'
    },
    {
      title: 'D',
      dataIndex: 'key'
    },
    {
      title: 'E',
      dataIndex: 'key'
      // width: 200,
    },
    {
      title: 'F',
      dataIndex: 'key'
      // width: 100,
    }
  ]
  const data = Array.from(
    {
      length: 1000
    },
    (_, key) => ({
      key
    })
  )
  return (
    <VirtualTable
      columns={columns}
      dataSource={data}
      scroll={{
        y: 800,
        x: '100vw'
      }}
    />
  )
}

export default testVirtualTable
