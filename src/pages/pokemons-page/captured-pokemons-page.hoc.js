import { connect } from 'react-redux';
import { fetchCapturedPokemonsStart } from '../../redux/pokemons/pokemons.actions';
import PokemonsPage from './pokemons-page.component';

const mapStateToProps = ({ pokemons: { capturedPokemons } }) => ({
  collection: capturedPokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchCapturedPokemonsStart())
});

const CapturedPokemonsPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);

export default CapturedPokemonsPageHOC;
