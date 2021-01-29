import React from 'react'
import { DragList } from '@/components'
import DragIcon from '@/assets/imgs/drag.svg'
import './index.scss'
function TestDragList () {
  const columns = [
    {
      title: 'A',
      dataIndex: 'key',
      // width: 150,
    },
    {
      title: 'B',
      dataIndex: 'key',
    },
    {
      title: 'C',
      dataIndex: 'key',
    },
    {
      title: 'D',
      dataIndex: 'key',
    },
    {
      title: 'E',
      dataIndex: 'key',
      // width: 200,
    },
    {
      title: 'F',
      dataIndex: 'key',
      // width: 100,
    },
  ];
  const data = Array.from(
    {
      length: 1000,
    },
    (_, key) => ({
      key,
    }),
  );
  return (
    <ul className='draglist'>
        {
            data.map((item, index) => {
                return (
                    <li>
                        {item.title}
                        <DragList>
                            <img src={DragIcon} className='img'></img>
                        </DragList>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default TestDragList