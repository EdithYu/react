import React, { useState } from 'react'
import { ContractionBox } from '@/components'
import { Button } from 'antd'
import './index.scss'
function TestContractionBox () {
  const [width, setWidth] = useState('400px')
  const [widths, setWidths] = useState('400px')
  const [heights, setHeights] = useState('100%')

  const changeWidth = () => {
    if (width === '0px') {
      setWidth('400px')
    } else {
      setWidth('0px')
    }
  }

  const changeBox = () => {
    if (widths === '54.75px') {
      setWidths('400px')
      setHeights('100%')
    } else {
      setWidths('54.75px')
      setHeights('32px')
    }
  }

  return (
    <div>
      <ContractionBox
        wrapClassName='ey-contraction-box'
        controlNode={(
          <Button onClick={() => { changeWidth() }}>test</Button>
        )}
      >
        <div className='ey-contraction-box-children' style={{ width: width }}>
          测试内容
        </div>
      </ContractionBox>
      <ContractionBox
        wrapClassName='ey-contraction-box2'
        controlNode={(
          <Button onClick={() => { changeBox() }} className='control-node'>test</Button>
        )}
      >
        <div className='ey-contraction-box-children' style={{ width: widths, height: heights }}>
          11111111111111111111111111111111111111111111111111111111111111111111111111111
        </div>
      </ContractionBox>
    </div>
  )
}

export default TestContractionBox
