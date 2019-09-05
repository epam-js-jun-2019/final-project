import { connect } from 'react-redux';
import { PokemonsList } from './pokemonsList';
import { withRouter } from 'react-router-dom';

function mapStateToProps( state ) {
 
  const { fetchedPokemons, pagination } = state;
  const currentPage = pagination["catchedPokemons"].currentPage ;
  const pokemons = fetchedPokemons.items  ;

  const pageIds = pagination["catchedPokemons"].pageIds[currentPage] ? pagination["catchedPokemons"].pageIds[currentPage] : { [currentPage]: [] };
  const pokemonsOnPage = pageIds.length === 0 ? [] : (pageIds.map(id => pokemons[id])) ;
  const otherPages =  pagination["catchedPokemons"].lastPage;

  return {
    pokemonsOnPage,
    otherPages
  }
}
const CatchedPokemonsList = withRouter(connect(mapStateToProps)(PokemonsList))
export default CatchedPokemonsList ;