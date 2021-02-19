| 属性             | 说明             | 类型     | 默认值 |
| ---------------- | ---------------- | -------- | ------ |
| data             | 图片资源数组     | Array   | []     |
| number           | 展示图片最大数量 | Number   | 6      |

![example](.\example.gif)

```
import React from 'react'
import Player from '@/components/Player'

function TestPlayer () {
  const data = [
    {
      imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1135967539,624108140&fm=26&gp=0.jpg', // 预览图片地址
      resourceUrl: 'https://video.shipin520.com/videos/80/20/03/b_WCY7kPq4fII71556802003_10s.mp4', // 真实加载资源地址
      type: 1 // 1 视频 2 图片
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
      type: 1
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      type: 2
    },
    {
      imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      resourceUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
        background: '#141414'
      }}
    >
      <Player
        data={data}
      />

    </div>
  )
}
export default TestPlayer


```

有问题或者需要扩展联系，余志强
create 2021/2/4 余志强

