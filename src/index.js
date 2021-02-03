import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RouterConfig from './router'
import 'antd/dist/antd.css'
import MainLayout from '@/page/common/MainLayout'

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
      <RouterConfig />
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
)
