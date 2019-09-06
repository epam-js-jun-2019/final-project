import React from 'react';

import './Random-page.styles.scss';

const RandomPage = ({ pokemon: { id, name, status, captureDate } }) => {
  const capitalizeWord = word => {
    const newWord = word.split('')[0].toUpperCase() + word.slice(1);
    return newWord;
  };
  return (
    <div style={{ position: 'relative' }}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(../../assets/images/pokemons-images/${id}.png)`
        }}
      />
      <div className='pokemon-info'>
        <h1>{capitalizeWord(name)}</h1>
        <img
          className='pokemon-image'
          src={`../../assets/images/pokemons-images/${id}.png`}
          alt='pokemon'
        />
        <span>
          ID: <span className='focus'>{id}</span>
        </span>
        <span>
          Status: <span className='focus'>{status}</span>
        </span>
        {captureDate !== 'none' ? (
          <span>
            Capture Date: <span className='focus'>{captureDate}</span>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default RandomPage;
