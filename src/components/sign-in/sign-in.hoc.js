import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';
import { auth } from '../../firebase/firebase.utils';
import SignIn from './sign-in.component';

const mapStateToProps = state => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
