import { connect } from 'react-redux';
import App from './App';

import { setUserData } from './redux/user/user.actions';

const mapStateToProps = ({ user: { userData } }) => ({
  userData
});

const mapDispatchToProps = dispatch => ({
  setUserData: payload => dispatch(setUserData(payload))
});

const AppHOC = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppHOC;
