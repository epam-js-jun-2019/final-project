import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

const NoMatch = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>404</Breadcrumb.Item>
       
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight:280, textAlign:'center'}}>
        
            <h1>Ooops...That is not the page you were looking for... </h1>
            <img src="assets/404.png" width="70%"/>
             <h3>(sad pika-pika)</h3>   
            </div>
        </Content>
    )
};

export default NoMatch;