import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import Navbar from './navbar.component';

const mapStateToProps = ({ user: { userData } }) => ({
  userData,
  auth
});

const NavbarHOC = connect(mapStateToProps, null)(Navbar);

export default NavbarHOC;
