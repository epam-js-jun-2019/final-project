import { connect } from 'react-redux';
import { fetchPokemons } from '../../actions/fetchPokemons';
import { switchPageCatched } from '../../actions/pagination';
import CatchedPokemons from './CatchedPokemons';

const mapStateToProps = (state) => {
  const { catched: { catchedPokemons, page, itemsPerPage } } = state;
  const { pokemons: { isLoading, isFailed } } = state;
  return {
    pokemons: catchedPokemons,
    isLoading,
    isFailed,
    page,
    itemsPerPage
  };
}

const mapDispatchToProps = {
  fetchPokemons,
  switchPage: switchPageCatched,
}

export default connect(mapStateToProps, mapDispatchToProps)(CatchedPokemons);
