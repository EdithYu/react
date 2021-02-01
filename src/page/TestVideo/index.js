import React, { useEffect } from 'react'
import { Video } from '@/components'
// import VideoLib from 'video.js'
// import 'video.js/dist/video-js.css'
// import './index.scss'
// import VideoRes from '@/assets/video/test.mp4'

function TestVideo (props) {
  return (
   <Video 
    id={'myff'}
    // width={300}
    // height={500}
    url={'https://video.shipin520.com/videos/80/20/03/b_WCY7kPq4fII71556802003_10s.mp4'}
    type={'video/mp4'}
   />
  )
}

export default TestVideo