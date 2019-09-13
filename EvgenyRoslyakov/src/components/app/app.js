import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import routes from '../../routes/routes';
import AppHeader from '../AppHeader/AppHeader';
import PageIndex from '../pages/PageIndex';
import PageCatched from '../pages/PageCatched';
import PageCard from '../pages/PageCard';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppHeader />
                <Switch>
                    <Redirect exact from={routes.INDEX} to={routes.ALL_PAGE_1} />
                    <Route path={routes.ALL_PAGE} component={PageIndex} />
                    <Route path={routes.CATCHED_PAGE} component={PageCatched} />
                    <Route path={routes.CARD_PAGE} component={PageCard} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App;