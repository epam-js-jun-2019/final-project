import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {rootReduser} from '../reducers/index';

export const store = createStore(
    rootReduser,
    applyMiddleware(thunk)
);