import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'react-app-polyfill/ie11';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import pokemonApp from './redux/reducer';

const configureStore = () => {
    const middlewares = [thunk];

    return createStore(
        pokemonApp,
        applyMiddleware(...middlewares),
    )
};

const store = configureStore();
console.info(store.getState());

render(
    <App store={store}/>, document.getElementById('root')
);

registerServiceWorker();