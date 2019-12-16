import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { onUserSignOut } from '../../redux/user/user.actions';

import Navbar from './navbar.component';

const mapStateToProps = ({ user: { userData } }) => ({
  userData,
  auth
});

const mapDispatchToProps = dispatch => ({
  onUserSignOut: () => dispatch(onUserSignOut())
});

const NavbarHOC = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarHOC;
