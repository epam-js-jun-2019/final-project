import { connect } from 'react-redux';
import PokemonPage from './pokemon-page.component';

const mapStateToProps = ({ pokemons: { currentPokemon } }) => ({
  currentPokemon
});

const PokemonPageHOC = connect(mapStateToProps)(PokemonPage);

export default PokemonPageHOC;
