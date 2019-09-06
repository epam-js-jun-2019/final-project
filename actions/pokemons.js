import {createAction} from 'redux-actions';

export const loadStart = createAction('[Pokemons] Load Start');
export const dataRecieved = createAction('[Pokemons] Data Recieved');
export const countRecieved = createAction('[Pokemons] Count Recieved');
export const errorOccured = createAction('[Pokemons] Error Occured');
export const pokemonsReset = createAction('[Pokemons] Data Reset');

export const load = () => (dispatch, getState) =>{
    const state = getState();
    dispatch(loadStart());
    fetch(`http://localhost:3000/pokemons?_page=${state.pokemons.page}&_limit=12`, {
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
    fetch('http://localhost:3000/pokemons', {
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