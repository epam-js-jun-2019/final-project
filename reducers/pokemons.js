import { handleActions } from 'redux-actions';

import { loadStart, dataRecieved, errorOccured, countRecieved, pokemonsReset } from '../actions/pokemons'

const initialState = {
    loading: false,
    pokemons: [],
    error: false,
    page: 1,
    total: null
}

export const reducer = handleActions({
    [loadStart]: (state) => {
        return{
            ...state,
            loading:true,
        }
    },
    [countRecieved]: (state, action) => {
        const data = action.payload;
        return{
            ...state,
            total: data,
            loading: false
        }
    },
    [dataRecieved]: (state, action) => {
        const data = action.payload;
        return{
            ...state,
            pokemons: [...state.pokemons, ...data],
            page: state.page+1,
            loading: false,
        }
    },
    [errorOccured]: (state) => {
        return{
            ...state,
            loading:false,
            error:true
        }
    },
    [pokemonsReset]: (state) => {
        return{
            ...state,
            pokemons:[],
            page:1
        }
    }
}, initialState)