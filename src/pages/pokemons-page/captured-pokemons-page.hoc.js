import { connect } from 'react-redux';
import { getCapturedPokemonsAsync } from '../../redux/pokemons/pokemons.actions';
import PokemonsPage from './pokemons-page.component';

const mapStateToProps = ({ pokemons: { capturedPokemons } }) => ({
  collection: capturedPokemons
});

const mapDispatchToProps = dispatch => ({
  getPokemonsAsync: () => dispatch(getCapturedPokemonsAsync())
});

const CapturedPokemonsPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);

export default CapturedPokemonsPageHOC;
