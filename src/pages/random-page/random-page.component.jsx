import React from 'react';
import { connect } from 'react-redux';

import './Random-page.styles.scss';

const RandomPage = ({ pokemon: { id, name, status, captureDate } }) => (
  <div style={{ position: 'relative' }}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
      }}
    />
    <div className='pokemon-info'>
      <h1>{name.split('')[0].toUpperCase() + name.slice(1)}</h1>
      <img
        className='pokemon-image'
        src={`../../assets/images/pokemons-images/${id}.png`}
        alt='pokemon'
      />
      <span>
        Status: <span className='focus'>{status}</span>
      </span>
      <span>
        Capture Date: <span className='focus'>{captureDate}</span>
      </span>
    </div>
  </div>
);

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  pokemon:
    freePokemons[Math.floor(Math.random() * Math.floor(freePokemons['length']))]
});

export default connect(mapStateToProps)(RandomPage);
