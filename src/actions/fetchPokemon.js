import { POKEMONS_URL, CATCHED_POKEMONS_URL } from '../constants/index';
import { FETCH_POKEMON } from './actionTypes';

const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON.REQUEST,
});

const fetchPokemonSuccess = (data) => ({
  type: FETCH_POKEMON.SUCCESS,
  payload: data,
});

const fetchPokemonFailure = () => ({
  type: FETCH_POKEMON.FAILURE,
});

const fetchPokemon = (id) => async (dispatch) => {
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

export default fetchPokemon;
