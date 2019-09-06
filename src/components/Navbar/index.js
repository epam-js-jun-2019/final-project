import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  const { catched: { catchedPokemons } } = state;
  return { catchedPokemons };
}

export default connect(mapStateToProps)(Navbar);