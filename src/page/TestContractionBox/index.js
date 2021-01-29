import React, { useState } from 'react'
import { ContractionBox } from '@/components'
import { Button } from 'antd'
import './index.scss'
function TestContractionBox () {
  const [width, setWidth] = useState('400px');
  const [width_2, setWidth_2] = useState('400px');
  const [height_2, setHeight_2] = useState('100%');

  const changeWidth = () => {
    if (width === '0px') {
      setWidth('400px')
    } else {
      setWidth('0px')
    }
  }

  const changeBox = () => {
    if (width_2 === '54.75px') {
      setWidth_2('400px')
      setHeight_2('100%')
    } else {
      setWidth_2('54.75px')
      setHeight_2('32px')
    }
  }


  return (
    <div>
      <ContractionBox
        wrapClassName={'ey-contraction-box'}
        controlNode={(
          <Button onClick={() => { changeWidth() }} >test</Button>
        )}
        >
        <div className='ey-contraction-box-children' style={{ width: width}}>
          测试内容
        </div>
      </ContractionBox>
      <ContractionBox
        wrapClassName={'ey-contraction-box2'}
        controlNode={(
          <Button onClick={() => { changeBox() }} className='control-node'>test</Button>
        )}
        >
        <div className='ey-contraction-box-children' style={{ width: width_2, height: height_2}}>
          11111111111111111111111111111111111111111111111111111111111111111111111111111
        </div>
      </ContractionBox>
    </div>
  )
}

export default TestContractionBox