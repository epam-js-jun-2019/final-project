import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ListCatched from '../listcatched';
const { Content } = Layout;

const AboutApp = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
<p>This is the final project for EPAM Training center.</p>
    <p><strong>Student</strong> Anatoly Shlom</p>
            </div>
        </Content>
    )
};

export default AboutApp;