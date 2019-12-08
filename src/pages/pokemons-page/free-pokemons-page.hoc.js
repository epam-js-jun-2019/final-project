import { connect } from 'react-redux';
import { fetchFreePokemonsStart } from '../../redux/pokemons/pokemons.actions';
import PokemonsPage from './pokemons-page.component';

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  collection: freePokemons
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchFreePokemonsStart())
});

const FreePokemonsPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsPage);

export default FreePokemonsPageHOC;
