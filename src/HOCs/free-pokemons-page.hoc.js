import { connect } from 'react-redux';
import PokemonsPage from 'Pages/pokemons-page/pokemons-page.component';

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  collection: freePokemons || null
});

export default connect(mapStateToProps)(PokemonsPage);
