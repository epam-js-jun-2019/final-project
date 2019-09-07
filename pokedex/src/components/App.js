import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header'
import Home from './Home';
import Catched from './Catched'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends React.Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return(
            <div className="App">
                <Router>
                    <Header />
                    <Route path="/" exact component={Home}/>
                    <Route path="/catched" component={Catched}/>
                </Router>
            </div>
        );
    }
}

export default App