import apiRequests from './http.lib';
import restApiLinks from './restful-api.links';

const pokemonsApiService = {
  catchPokemon: async pokemon => {
    try {
      const backRequest = await apiRequests.post(
        restApiLinks.capturedPokemons,
        pokemon
      );
      const { response } = backRequest;
      if (response.ok) {
        await apiRequests.delete(`${restApiLinks.freePokemons}/${pokemon.id}`);
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
      const { response } = backRequest;
      if (response.ok) {
        await apiRequests.delete(
          `${restApiLinks.capturedPokemons}/${pokemon.id}`
        );
      } else {
        throw new Error(response);
      }
    } catch (err) {
      throw err;
    }
  }
};

export default pokemonsApiService;
