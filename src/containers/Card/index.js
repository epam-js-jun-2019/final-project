import { catchPokemon } from '../../actions/catchPokemon';
import { connect } from 'react-redux';
import Card from './Card';

const mapStateToProps = (state) => {
  const { catched: { catchedPokemons } } = state;
  return { catchedPokemons };
}

const mapDispatchToProps = {
  catchPokemon,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);