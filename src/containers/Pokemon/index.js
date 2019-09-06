import Pokemon from './Pokemon';
import { connect } from 'react-redux';
import fetchPokemon from '../../actions/fetchPokemon';

const mapStateToProps = (state) => {
  const { pokemon: { data, catched, isLoading, isFailed } } = state;
  return { data, catched, isLoading, isFailed };
}

const mapDispatchToProps = {
  fetchPokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);