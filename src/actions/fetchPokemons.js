import { POKEMONS_URL, CATCHED_POKEMONS_URL } from '../constants/index';
import { FETCH_POKEMONS } from './actionTypes';

const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS.REQUEST,
});

const fetchPokemonsSuccess = (data) => ({
  type: FETCH_POKEMONS.SUCCESS,
  payload: data,
});

const fetchPokemonsFailure = () => ({
  type: FETCH_POKEMONS.FAILURE,
});

export const fetchPokemons = () => async (dispatch) => {
  dispatch(fetchPokemonsRequest());
  try {
    const pokemons = fetch(`${POKEMONS_URL}`).then(res => res.json());
    const catchedPokemons = fetch(`${CATCHED_POKEMONS_URL}`).then(res => res.json());
    const data = await Promise.all([pokemons, catchedPokemons]);
    const result = {
      pokemons: data[0],
      catchedPokemons: data[1],
    };
    dispatch(fetchPokemonsSuccess(result));
  } catch (e) {
    console.log(e);
    dispatch(fetchPokemonsFailure());
  }
};
