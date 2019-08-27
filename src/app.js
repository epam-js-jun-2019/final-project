import React from 'react';
import NavBar from './components/navBar.js';
import Switchpath from './logic/routes.js';

class App extends React.Component {
    render() {
        return (
        <div>
            <NavBar />
            <Switchpath />
        </div>
        )
};
}

export default App;
