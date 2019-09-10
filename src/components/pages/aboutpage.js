import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

const AboutApp = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>About</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
                <p>This is the final project for EPAM Training center.</p>
                <p>Student - <strong>Anatoly Shlom</strong></p>
                <p>GitHub - <a href='https://github.com/AMSHL/final-project'>https://github.com/AMSHL/final-project</a></p>
                <p>UI CSS Framework - <a href='https://ant.design'>https://ant.design</a></p>
            </div>
        </Content>
    )
};

export default AboutApp;