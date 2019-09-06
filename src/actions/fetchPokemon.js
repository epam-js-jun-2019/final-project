import { createAction } from 'redux-actions';
import { POKEMONS_URL, CATCHED_POKEMONS_URL } from '../constants/index';

export const fetchPokemonRequest = createAction('FETCH_POKEMON_REQUEST');
export const fetchPokemonSuccess = createAction('FETCH_POKEMON_SUCCESS');
export const fetchPokemonFailure = createAction('FETCH_POKEMON_FAILURE');

export const fetchPokemon = (id) => async (dispatch) => {
  dispatch(fetchPokemonRequest());
  try {
    const pokemon = fetch(`${POKEMONS_URL}/${id}`).then((res) => res.json());
    const catched = fetch(`${CATCHED_POKEMONS_URL}/${id}`).then((res) => res.json());
    const data = await Promise.all([pokemon, catched]);
    const result = {
      data: data[0],
      catched: data[1],
    };
    dispatch(fetchPokemonSuccess(result));
  } catch (e) {
    dispatch(fetchPokemonFailure(e));
  }
};
