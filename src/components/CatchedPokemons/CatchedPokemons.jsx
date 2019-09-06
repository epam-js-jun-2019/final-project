import React from 'react';
import Pokemons from '../../containers/Pokemons/Pokemons';

export default function(props) {
  return (
    <>
      <h1>Catched pokemons</h1>
      <Pokemons {...props}/>
    </>
  );
}