import SmallHTTP from './http.lib';

export const getPokemonData = (id = '') =>
  SmallHTTP.prototype.get(`http://localhost:3000/pokemons/${id}`);
