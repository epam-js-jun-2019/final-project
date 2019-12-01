import { connect } from 'react-redux';
import { getFreePokemonsAsync } from '../../redux/pokemons/pokemons.actions';
import PokemonsPage from './pokemons-page.component';

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  collection: freePokemons
});

const mapDispatchToProps = dispatch => ({
  getPokemonsAsync: () => dispatch(getFreePokemonsAsync())
});

const FreePokemonsPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);

export default FreePokemonsPageHOC;
