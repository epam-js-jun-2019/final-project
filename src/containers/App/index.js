import App from './App';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions/fetchPokemons';

const mapDispatchToProps = {
  fetchPokemons,
}

export default connect(null, mapDispatchToProps)(App);