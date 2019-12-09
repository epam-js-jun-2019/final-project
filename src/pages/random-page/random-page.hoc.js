import { connect } from 'react-redux';
import { fetchRandomPokemonAsync } from '../../redux/pokemons/pokemons.actions';

import RandomPage from '../random-page/random-page.component';
const mapStateToProps = ({ pokemons: { randomPokemon, isFetching } }) => ({
  pokemon: randomPokemon,
  isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchRandomPokemonAsync: () => dispatch(fetchRandomPokemonAsync())
});

const RandomPokemonPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPage);

export default RandomPokemonPageHOC;
