import React from 'react';
import { Layout } from 'antd';
import NavBar from './components/navBar.js';
import Switchpath from './logic/routes.js';
import AppFooter from './components/appfooter'

class App extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <NavBar />
                <Switchpath />
                <AppFooter />
            </Layout>
        )
    };
}

export default App;
