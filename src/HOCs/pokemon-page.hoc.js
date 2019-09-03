import { connect } from 'react-redux';
import PokemonPage from '../pages/pokemon-page/pokemon-page.component';

const mapStateToProps = ({ pokemons: { currentPokemon } }) => ({
  currentPokemon: currentPokemon || null
});

export default connect(mapStateToProps)(PokemonPage);
