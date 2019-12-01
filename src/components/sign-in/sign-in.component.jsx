import React, { useState } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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

  const handleFormSubmit = e => {
    e.preventDefault();

    setState({ ...state, email: '', password: '' });
  };

  const handleInputChange = e => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2 className='have-account'>I already have an account</h2>
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
          <CustomButton addClass='second-button' onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
