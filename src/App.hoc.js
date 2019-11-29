import { connect } from 'react-redux';
import { getPokemonsAsync } from 'Redux/pokemons/pokemons.actions';
import App from './App';

const mapDispatchToProps = dispatch => ({
  getPokemonsAsync: () => dispatch(getPokemonsAsync())
});

const AppHOC = connect(null, mapDispatchToProps)(App);

export default AppHOC;
