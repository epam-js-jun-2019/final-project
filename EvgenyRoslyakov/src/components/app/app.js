import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import PageIndex from '../pages/page-index';
import PageCatched from '../pages/page-catched';
import PageCard from '../pages/page-card';
import './app.css';

const App = () => {
    return (
        <Router>
            <AppHeader />
            <Switch>
                <Route exact path="/" component={PageIndex} />
                <Route path="/catched" component={PageCatched} />
                <Route path="/:id" component={PageCard} />
            </Switch>
        </Router>
    )
}

export default App;