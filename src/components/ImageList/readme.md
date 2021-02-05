| 属性             | 说明             | 类型     | 默认值 |
| ---------------- | ---------------- | -------- | ------ |
| data             | 图片资源数组     | Object   | []     |
| number           | 展示图片最大数量 | Number   | 6      |
| handleClickEvent | 点击图片回调事件 | Function | 无     |

![example](.\example.gif)

```
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

```

有问题或者需要扩展联系，余志强
create 2021/2/4 余志强

