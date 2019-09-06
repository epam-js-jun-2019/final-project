import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions/fetchPokemons';
import { switchPagePokemons } from '../../actions/pagination';
import Pokemons from './Pokemons';

const mapStateToProps = (state) => {
  const { pokemons: { pokemons, isLoading, isFailed, page, itemsPerPage } } = state;
  return { 
    pokemons,
    isLoading,
    isFailed,
    page,
    itemsPerPage
  };
}

const mapDispatchToProps = {
  fetchPokemons,
  switchPage: switchPagePokemons,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);