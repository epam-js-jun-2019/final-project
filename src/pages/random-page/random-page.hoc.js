import { connect } from 'react-redux';
import { getRandomPokemonAsync } from '../../redux/pokemons/pokemons.actions';

import RandomPage from '../random-page/random-page.component';
const mapStateToProps = ({ pokemons: { randomPokemon, isFetching } }) => ({
  pokemon: randomPokemon,
  isFetching
});

const mapDispatchToProps = dispatch => ({
  getRandomPokemonAsync: () => dispatch(getRandomPokemonAsync())
});

const RandomPokemonPageHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPage);

export default RandomPokemonPageHOC;
