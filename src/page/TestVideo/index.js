import React, { useState } from 'react'
import { Video } from '@/components'
import { Button } from 'antd'

function TestVideo () {
  const [url, setUrl] = useState('https://video.shipin520.com/videos/80/20/03/b_WCY7kPq4fII71556802003_10s.mp4')
  const toggleUrl = () => {
    setUrl('https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4')
    console.log(url)
  }
  return (
    <div>
      <Button onClick={toggleUrl}>
        test
      </Button>
      <Video
        playsInline
        poster='/assets/poster.png'
        src={url}
      />
    </div>
  )
}
export default TestVideo
