import { SWITCH_PAGE_POKEMONS, SWITCH_PAGE_CATCHED } from './actionTypes';

export const switchPagePokemons = (page) => ({
  type: SWITCH_PAGE_POKEMONS,
  payload: { page },
});

export const switchPageCatched = (page) => ({
  type: SWITCH_PAGE_CATCHED,
  payload: { page },
});

