import { connect } from 'react-redux';
import { PokemonsList } from './pokemonsList';
import { withRouter } from 'react-router-dom';

function mapStateToProps( state )  {
 
  const { fetchedPokemons, pagination } = state;
  const currentPage = pagination["pokemons"].currentPage ;
  const pokemons = fetchedPokemons.items;
  const isFetching = fetchedPokemons.isFetching;

  const pageIds = Object.keys(pagination["pokemons"].pageIds).length !== 0 ? pagination["pokemons"].pageIds : { 1: [] };
  const pokemonsOnPage = isFetching ? [] : (pageIds[currentPage].map(page=>pokemons[page])) ;
  const otherPages = pagination["pokemons"].lastPage;
  return {
    isFetching,
    pokemonsOnPage,
    otherPages
  }
}

const FreePokemons = withRouter(connect(mapStateToProps)(PokemonsList));
export default FreePokemons;