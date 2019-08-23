import SmallHTTP from './http.lib';

export const getPokemonData = () =>
  SmallHTTP.prototype.get(`http://localhost:3012/db/`);

export const catchPokemonFunc = pokemon => {
  SmallHTTP.prototype.post(`http://localhost:3012/capturedPokemons/`, pokemon);
  SmallHTTP.prototype.delete(
    `http://localhost:3012/freePokemons/${pokemon.id}`
  );
};

export const setPokemonFreeFunc = pokemon => {
  SmallHTTP.prototype.post(`http://localhost:3012/freePokemons/`, pokemon);
  SmallHTTP.prototype.delete(
    `http://localhost:3012/capturedPokemons/${pokemon.id}`
  );
};
