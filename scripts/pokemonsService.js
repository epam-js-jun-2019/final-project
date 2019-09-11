import { apiService } from "./apiService"

export const pokemonsService ={
    getPokemons(){
        const url =`http://localhost:3000/pokemons`;
        return apiService.get(url);
    },

    getCaughtPokemons(){
        const url =`http://localhost:3000/caught_pokemons`;
        return apiService.get(url);
    },

    getCaughtPokemon(id){
        const url = `http://localhost:3000/caught_pokemons?id=${id}`;
        return apiService.get(url);
    },

    getPokemon(id){
        const url = `http://localhost:3000/pokemons?id=${id}`;
        return apiService.get(url);
    },

    catchPokemon(id, name, img){
        const url = `http://localhost:3000/caught_pokemons`;
        const captureDate = new Date();
        const data = {id, name, img, captureDate};
        return apiService.post(url,data);
    }
}
