import { connect } from 'react-redux';
import { getRandomPokemonAsync } from '../../redux/pokemons/pokemons.actions';

import RandomPage from '../random-page/random-page.component';
const mapStateToProps = ({ pokemons: { randomPokemon, isLoading } }) => ({
  pokemon: randomPokemon,
  isLoading
});

const mapDispatchToProps = dispatch => ({
  getRandomPokemonAsync: () => dispatch(getRandomPokemonAsync())
});

const RandomPageHOC = connect(mapStateToProps, mapDispatchToProps)(RandomPage);

export default RandomPageHOC;
