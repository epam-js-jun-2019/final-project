import {GET_POKEMONS_PAGE,LOADING_START,LOADING_SUCCESS,LOADING_FAILURE} from './consts'

export const getPokemonsPage = () => {
    return {
        type : GET_POKEMONS_PAGE,
        payload : ''
    }
}

export const loadPokemons = () =>{
    return{
        type : LOADING_START
    }
}

export const setPokemonsData = (payload) => {
    return{
        type : LOADING_SUCCESS,
        payload
    }
}

export const loadingError = (payload) => {
    return{
        type : LOADING_FAILURE,
        payload
    }
}