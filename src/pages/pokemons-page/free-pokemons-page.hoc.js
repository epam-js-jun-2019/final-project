import { connect } from 'react-redux';
import PokemonsPage from './pokemons-page.component';

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  collection: freePokemons || null
});

const FreePokemonsPageHOC = connect(mapStateToProps)(PokemonsPage);

export default FreePokemonsPageHOC;
