import { CATCHED_POKEMONS_URL } from '../constants/index';
import { CATCH_POKEMON } from './actionTypes';

const catchPokemonRequest = () => ({
  type: CATCH_POKEMON.REQUEST,
});

const catchPokemonSuccess = (data) => ({
  type: CATCH_POKEMON.SUCCESS,
  payload: data,
});

const catchPokemonFailure = () => ({
  type: CATCH_POKEMON.FAILURE,
});

export const catchPokemon = (data) => async (dispatch) => {
  dispatch(catchPokemonRequest());
  try {
    const response = await fetch( `${CATCHED_POKEMONS_URL}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    if (response.status === 201) {
      dispatch(catchPokemonSuccess(data));
    } else {
      dispatch(catchPokemonFailure());
    }
  } catch(e) {
    console.log(e);
    dispatch(catchPokemonFailure());
  }
};