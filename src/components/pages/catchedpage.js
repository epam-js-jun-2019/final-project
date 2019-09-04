import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ListCatched from '../listcatched';
const { Content } = Layout;

const CatchedPokemons = () => {
    return (
        <Content style={{ padding: '0 50px'  }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Pokemons</Breadcrumb.Item>
        <Breadcrumb.Item>Catched</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
          <ListCatched />
            </div>
        </Content>
    )
};

export default CatchedPokemons;