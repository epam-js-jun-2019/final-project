import { connect } from 'react-redux';
import App from './App';

import { checkUserSession } from './redux/user/user.actions';

const mapStateToProps = ({
  user: { userData, isLoadingUser },
  pokemons: { currentPokemon }
}) => ({
  userData,
  currentPokemon,
  isLoadingUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const AppHOC = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppHOC;
