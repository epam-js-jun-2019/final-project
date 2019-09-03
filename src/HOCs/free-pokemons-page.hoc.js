import { connect } from 'react-redux';
import FreePokemonsPage from 'Pages/free-pokemons/free-pokemons-page.component';

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  collection: freePokemons || null
});

export default connect(mapStateToProps)(FreePokemonsPage);
