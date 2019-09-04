import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import BigCard from '../card.big'
const { Content } = Layout;

const PokemonPage = ({ match }) => {
    return (
        <Content style={{ padding: '0 50px'  }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Pokemons</Breadcrumb.Item>
        <Breadcrumb.Item>{match.params.id}</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
            
            <BigCard id={match.params.id}/>
            </div>
        </Content>
    )
};

export default PokemonPage;
