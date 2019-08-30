import React from 'react';
//import{ Link } from"react-router-dom";

import { Layout, Breadcrumb } from 'antd';

//import GetPokemons from '../../logic/getpokemons';
import List from '../list';
const { Content } = Layout;

const FirstPage = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
          <List />
            </div>
        </Content>
    )
};

export default FirstPage;