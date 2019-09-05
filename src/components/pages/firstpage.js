import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ListAll from '../listall';
const { Content } = Layout;

const FirstPage = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Pokemons</Breadcrumb.Item>
                <Breadcrumb.Item>All</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
                <ListAll />
            </div>
        </Content>
    )
};

export default FirstPage;