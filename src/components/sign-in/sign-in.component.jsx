import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

const SignIn = () => {
  const initialState = {
    email: '',
    password: ''
  };
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleFormSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ ...state, email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = e => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2 className='have-account'>Already have an account?</h2>
      <p className='sign-in-message'>Sign in with your email and password</p>

      <form onSubmit={handleFormSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleInputChange={handleInputChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleInputChange={handleInputChange}
          label='Password'
          required
        />
        <div className='buttons-wrapper'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            additionalClass='google-sign-in'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
