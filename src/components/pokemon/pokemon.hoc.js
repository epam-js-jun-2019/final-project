import { connect } from 'react-redux';
import {
  catchPokemonAsync,
  setPokemonFreeAsync,
  setCurrentPokemon
} from '../../redux/pokemons/pokemons.actions';
import { getPokemonImgReference } from '../../firebase/firebase.utils';
import Pokemon from './pokemon.component';

const mapStateToProps = ({ user: { userData } }) => ({
  userData,
  getPokemonImgReference
});

const mapDispatchToProps = dispatch => ({
  catchPokemonAsync: pokemon => dispatch(catchPokemonAsync(pokemon)),
  setPokemonFreeAsync: pokemon => dispatch(setPokemonFreeAsync(pokemon)),
  setCurrentPokemon: pokemon => dispatch(setCurrentPokemon(pokemon))
});

const PokemonHOC = connect(mapStateToProps, mapDispatchToProps)(Pokemon);

export default PokemonHOC;
