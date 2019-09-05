import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router  } from "react-router-dom"

import mainReducer from './reducers';
import App from './components/App/App';


const store = createStore(mainReducer,  applyMiddleware(thunkMiddleware));

render(
    <Router>  
        <Provider store={ store }>  
            <App/>
        </Provider>
    </Router>
    , 
    document.getElementById('app')
);