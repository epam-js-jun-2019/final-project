import { connect } from 'react-redux';
import {
  catchPokemonAsync,
  setPokemonFreeAsync,
  setCurrentPokemon
} from 'Redux/pokemons/pokemons.actions';
import Pokemon from 'Components/pokemon/pokemon.component';

const mapDispatchToProps = dispatch => ({
  catchPokemonAsync: pokemon => dispatch(catchPokemonAsync(pokemon)),
  setPokemonFreeAsync: pokemon => dispatch(setPokemonFreeAsync(pokemon)),
  setCurrentPokemon: pokemon => dispatch(setCurrentPokemon(pokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(Pokemon);
