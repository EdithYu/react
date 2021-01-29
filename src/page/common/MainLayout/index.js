import React from 'react';
import { Layout } from 'antd';
import './index.scss'
const { Header, Content } = Layout;

function MainLayout(props) {
  
  return (
    <Layout className='main-layout'>
      <Header className='main-layout-header'>
        zqyu
      </Header>
      <Content className='main-layout-content'>
        {props.children}
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}

export default MainLayout