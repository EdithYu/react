import React from 'react'
import { ImageList } from '@/components'

function TestImageList () {
  const data = [
    {
      imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1135967539,624108140&fm=26&gp=0.jpg',
      resourceUrl: '',
      type: 1
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 2
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 1
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 2
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 1
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 2
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 1
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: '',
      type: 2
    }
  ]
  return (
    <div
      style={{
        width: '500px',
        position: 'relative',
        background: '#141414',
        padding: '16px 18px'
      }}
    >
      <ImageList
        data={data}
      />
    </div>
  )
}
export default TestImageList
