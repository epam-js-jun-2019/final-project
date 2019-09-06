import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'),
);