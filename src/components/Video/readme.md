| 属性   | 说明         | 类型    | 默认值 |
| ------ | ------------ | ------- | ------ |
| src    | 资源路径     | String  | 必填   |
| poster | 封面资源地址 | String  | 无     |
| width  | 宽度         | Number  | 840    |
| height | 高度         | Number  | 436    |

![example](.\example.gif)

```
import React from 'react'
import { Video } from '@/components'

function TestVideo (props) {
  return (
   <Video 
    width={300}
    height={500}
    src={'https://video.shipin520.com/videos/80/20/03/b_WCY7kPq4fII71556802003_10s.mp4'}
   />
  )
}

export default TestVideo
```

有问题或者需要扩展联系，余志强
create 2021/2/2 余志强

