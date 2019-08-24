import SmallHTTP from 'FetchAPI/http.lib';

export const APIgetPokemonData = () =>
  SmallHTTP.prototype.get(`http://localhost:3000/db/`);

export const APIcatchPokemon = pokemon => {
  SmallHTTP.prototype.post(`http://localhost:3000/capturedPokemons/`, pokemon);
  SmallHTTP.prototype.delete(
    `http://localhost:3000/freePokemons/${pokemon.id}`
  );
};

export const APIsetPokemonFree = pokemon => {
  SmallHTTP.prototype.post(`http://localhost:3000/freePokemons/`, pokemon);
  SmallHTTP.prototype.delete(
    `http://localhost:3000/capturedPokemons/${pokemon.id}`
  );
};
