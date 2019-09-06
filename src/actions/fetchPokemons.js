import { createAction } from 'redux-actions';
import { POKEMONS_URL, CATCHED_POKEMONS_URL } from '../constants/index';

export const fetchPokemonsRequest = createAction('FETCH_POKEMONS_REQUEST');
export const fetchPokemonsSuccess = createAction('FETCH_POKEMONS_SUCCESS');
export const fetchPokemonsFailure = createAction('FETCH_POKEMONS_FAILURE');

export const fetchPokemons = () => async (dispatch) => {
  dispatch(fetchPokemonsRequest());
  try {
    const pokemons = fetch(`${POKEMONS_URL}`).then((res) => res.json());
    const catchedPokemons = fetch(`${CATCHED_POKEMONS_URL}`).then((res) => res.json());
    const data = await Promise.all([pokemons, catchedPokemons]);
    const result = {
      allPokemons: data[0],
      catchedPokemons: data[1],
    };
    dispatch(fetchPokemonsSuccess(result));
  } catch (e) {
    dispatch(fetchPokemonsFailure());
  }
};
