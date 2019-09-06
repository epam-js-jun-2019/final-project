import { createAction } from 'redux-actions';
import { CATCHED_POKEMONS_URL } from '../constants/index';

export const catchPokemonRequest = createAction('CATCH_POKEMON_REQUEST');
export const catchPokemonSuccess = createAction('CATCH_POKEMON_SUCCESS');
export const catchPokemonFailure = createAction('CATCH_POKEMON_FAILURE');

export const catchPokemon = (data) => async (dispatch) => {
  dispatch(catchPokemonRequest());
  try {
    const response = await fetch(`${CATCHED_POKEMONS_URL}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 201) {
      dispatch(catchPokemonSuccess(data));
    } else {
      dispatch(catchPokemonFailure());
    }
  } catch (e) {
    dispatch(catchPokemonFailure());
  }
};
