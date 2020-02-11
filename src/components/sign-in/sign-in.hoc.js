import { connect } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import SignIn from './sign-in.component';

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: emailAndPassword =>
    dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
