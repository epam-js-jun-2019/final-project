import * as actionTypes from "./constants";

export const getPokemonsLoading = bool => ({
  type: actionTypes.GET_POKEMONS_LOADING,
  isLoading: bool
});

export const getPokemonsSuccess = data => {
  return {
    type: actionTypes.GET_POKEMONS_SUCCESS,
    payload: data
  };
};

export const getPokemonsFail = error => ({
  type: actionTypes.GET_POKEMONS_FAIL,
  payload: {
    error: error.message || "Error, sorry"
  }
});

export const ARE_ALL_POKEMONS_LOADED = () => ({
  type: actionTypes.ARE_ALL_POKEMONS_LOADED
});

export const requestPokemons = () => (dispatch, getState) => {
  dispatch(getPokemonsLoading(true));
  return fetch(
    `http://localhost:3001/pokemons?_page=${getState().page}&_limit=20`
  )
    .then(res => res.json())
    .then(data => {
      if (data.length < 20) {
        dispatch(ARE_ALL_POKEMONS_LOADED());
      }
      dispatch(getPokemonsSuccess(data));
      return data;
    })
    .catch(err => dispatch(getPokemonsFail(err)));
};

export const catchPokemonStart = () => ({
  type: actionTypes.CATCH_POKEMON_START
});

export const catchPokemonSuccess = (id, name) => ({
  type: actionTypes.CATCH_POKEMON_SUCCESS,
  payload: { id: id, name: name }
});

export const catchPokemonFail = error => ({
  type: actionTypes.CATCH_POKEMON_FAIL,
  payload: {
    error: error.message || "The pokemon was not catch"
  }
});

export const catchPokemon = (id, name) => {
  return dispatch => {
    dispatch(catchPokemonStart());
    return fetch(`http://localhost:3001/pokemons/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        id: id,
        caught: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => dispatch(catchPokemonSuccess(id, name)))
      .catch(error => dispatch(catchPokemonFail(error)));
  };
};

export const getCaughtPokemonsLoading = bool => ({
  type: actionTypes.GET_CAUGHT_POKEMONS_LOADING,
  isLoading: bool
});

export const getCaughtPokemonsSuccess = data => {
  return {
    type: actionTypes.GET_CAUGHT_POKEMONS_SUCCESS,
    payload: data
  };
};

export const getCaughtPokemonsFail = error => ({
  type: actionTypes.GET_CAUGHT_POKEMONS_FAIL,
  payload: {
    error: error.message || "Error, sorry"
  }
});

export const areAllCaughtPokemonsLoaded = () => ({
  type: actionTypes.ARE_ALL_CAUGHT_POKEMONS_LOADED
});

export const requestCaughtPokemons = () => (dispatch, getState) => {
  dispatch(getCaughtPokemonsLoading(true));
  return fetch(
    `http://localhost:3001/pokemons/?caught=true&_page=${
      getState().caughtPage
    }&_limit=20`
  )
    .then(res => res.json())
    .then(data => {
      if (data.length < 20) {
        dispatch(areAllCaughtPokemonsLoaded());
      }
      dispatch(getCaughtPokemonsSuccess(data));
      return data;
    })
    .catch(err => dispatch(getCaughtPokemonsFail(err)));
};

export const getPokemonInfoLoading = bool => ({
  type: actionTypes.GET_POKEMON_INFO_LOADING,
  isLoading: bool
});

export const getPokemonInfoSuccess = data => {
  return {
    type: actionTypes.GET_POKEMON_INFO_SUCCESS,
    payload: data
  };
};

export const getPokemonInfoFail = error => ({
  type: actionTypes.GET_POKEMON_INFO_FAIL,
  payload: {
    error: error.message || "Error, sorry"
  }
});

export const requestPokemonInfo = id => dispatch => {
  dispatch(getPokemonInfoLoading(true));
  return fetch(`http://localhost:3001/pokemons?id=${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch(getPokemonInfoSuccess(data[0]));
      return data[0];
    })
    .catch(err => dispatch(getPokemonsFail(err)));
};
