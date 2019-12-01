import { connect } from 'react-redux';
import PokemonsPage from './pokemons-page.component';

const mapStateToProps = ({ pokemons: { capturedPokemons } }) => ({
  collection: capturedPokemons || null
});

const CapturedPokemonsPageHOC = connect(mapStateToProps)(PokemonsPage);

export default CapturedPokemonsPageHOC;
