import { connect } from 'react-redux';
import {
  catchPokemon,
  setPokemonFree,
  setCurrentPokemon
} from 'Redux/pokemons/pokemons.actions';
import Pokemon from 'Components/pokemon/pokemon.component';

const mapDispatchToProps = dispatch => ({
  catchPokemon: pokemon => dispatch(catchPokemon(pokemon)),
  setPokemonFree: pokemon => dispatch(setPokemonFree(pokemon)),
  setCurrentPokemon: pokemon => dispatch(setCurrentPokemon(pokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(Pokemon);
