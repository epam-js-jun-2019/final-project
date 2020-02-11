import apiRequests from './http.lib';
import restApiLinks from './restful-api.links';

const pokemonsApiService = {
  catchPokemon: async pokemon => {
    try {
      const backRequest = await apiRequests.post(
        restApiLinks.capturedPokemons,
        pokemon
      );
      const { response, data } = backRequest;
      if (response.ok) {
        await apiRequests.delete(`${restApiLinks.freePokemons}/${pokemon.id}`);
        return data;
      } else {
        throw new Error(response);
      }
    } catch (err) {
      throw err;
    }
  },
  setPokemonFree: async pokemon => {
    try {
      const backRequest = await apiRequests.post(
        restApiLinks.freePokemons,
        pokemon
      );
      const { response, data } = backRequest;
      if (response.ok) {
        await apiRequests.delete(
          `${restApiLinks.capturedPokemons}/${pokemon.id}`
        );
        return data;
      } else {
        throw new Error(response);
      }
    } catch (err) {
      throw err;
    }
  },
  getRandomPokemon: async () => {
    try {
      const pseudoRandomNumber =
        Math.floor(Math.random() * Math.floor(100)) + 10;
      const id = pseudoRandomNumber > 0 && pseudoRandomNumber;
      const data = await apiRequests.get(`${restApiLinks.freePokemons}/${id}`);
      return data;
    } catch (err) {
      throw err;
    }
  },
  getFreePokemons: async () => {
    try {
      const data = await apiRequests.get(restApiLinks.freePokemons);
      return data;
    } catch (err) {
      throw err;
    }
  },
  getCapturedPokemons: async () => {
    try {
      const data = await apiRequests.get(restApiLinks.capturedPokemons);
      return data;
    } catch (err) {
      throw err;
    }
  }
};

export default pokemonsApiService;
