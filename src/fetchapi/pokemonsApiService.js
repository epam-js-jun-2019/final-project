import { catchPokemon, setPokemonFree } from 'Redux/pokemons/pokemons.actions';
import apiRequests from './http.lib';
import restApiLinks from './restful-api.links';
import store from 'Redux/store';

const pokemonsApiService = {
  catchPokemon: async pokemon => {
    const backRequest = await apiRequests.post(
      restApiLinks.capturedPokemons,
      pokemon
    );
    const { data, response } = backRequest;
    if (response.ok) {
      await apiRequests.delete(`${restApiLinks.freePokemons}/${pokemon.id}`);
      store.dispatch(catchPokemon(data));
    }
  },
  setPokemonFree: async pokemon => {
    const backRequest = await apiRequests.post(
      restApiLinks.freePokemons,
      pokemon
    );
    const { data, response } = backRequest;
    if (response.ok) {
      await apiRequests.delete(
        `${restApiLinks.capturedPokemons}/${pokemon.id}`
      );
      store.dispatch(setPokemonFree(data));
    }
  }
};

export default pokemonsApiService;
