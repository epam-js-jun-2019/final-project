import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import './pokemon.styles.scss';

const Pokemon = ({ id, name, status, captureDate }) => (
  <div className='Pokemon__container'>
    <Link to={`pokemon/${id}`}>
      <img
        className='Pokemon__image'
        src={`./assets/images/pokemons-images/${id}.png`}
        alt='pokemon'
      />
    </Link>
    <div className='Pokemon__text'>
      <div className='Pokemon__name'>
        Name:{' '}
        <span className='focus'>
          {name.split('')[0].toUpperCase() + name.slice(1)}
        </span>
      </div>
      <div className='Pokemon__status'>
        Status: <span className='focus'>{status}</span>
      </div>
      <div className='Pokemon__captureDate'>
        Capture Date: <span className='focus'>{captureDate}</span>
      </div>
    </div>
    <CustomButton>Catch</CustomButton>
  </div>
);

export default Pokemon;
