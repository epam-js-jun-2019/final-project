import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
                <Redirect exact from="/" to="/page1" />
                <Route path="/page:id" component={PageIndex} />
                <Route path="/catched/page:id" component={PageCatched} />
                <Route path="/card/:id" component={PageCard} />
            </Switch>
        </Router>
    )
}

export default App;