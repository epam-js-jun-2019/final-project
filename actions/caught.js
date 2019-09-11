import {createAction} from 'redux-actions';

export const loadStart = createAction('[Caught] Load Start');
export const dataRecieved = createAction('[Caught] Data Recieved');
export const countRecieved = createAction('[Caught] Count Recieved');
export const errorOccured = createAction('[Caught] Error Occured');
export const caughtReset = createAction('[Caught] Data Reset');

export const load = () => (dispatch, getState) =>{
    const state = getState();
    dispatch(loadStart());
    fetch(`http://localhost:3000/caught_pokemons?_page=${state.caught.page}&_limit=12`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then((data) => {
        dispatch(dataRecieved(data));
    })
    .catch(() => {
        dispatch(errorOccured());
    })
}

export const loadCount = () => (dispatch) =>{
    dispatch(loadStart());
    fetch('http://localhost:3000/caught_pokemons', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        dispatch(countRecieved(data.length));
    })
    .catch(error => {
        dispatch(errorOccured());
    });
}