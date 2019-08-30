import React from 'react';
import{ Link } from"react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;


const NavBar = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to='/'>Show all </Link></Menu.Item>
                <Menu.Item key="2"><Link to='/catched'>Catched </Link></Menu.Item>
                <Menu.Item key="3"><Link to='/about'>About </Link></Menu.Item>
            </Menu>
        </Header>
    )
};

export default NavBar;
