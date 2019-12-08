import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

const SignUp = () => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [state, setState] = useState(initialState);
  const { displayName, email, password, confirmPassword } = state;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setState({ ...initialState });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>Do not have an account?</h2>
      <span className='sign-up-message'>
        Sign up with your email and password
      </span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
