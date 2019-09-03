import { connect } from 'react-redux';
import CapturedPokemonsPage from 'Pages/captured-pokemons/captured-pokemons-page.component';

const mapStateToProps = ({ pokemons: { capturedPokemons } }) => ({
  collection: capturedPokemons || null
});

export default connect(mapStateToProps)(CapturedPokemonsPage);
