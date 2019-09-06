import React from 'react';
import Loader from '../Loader/Loader';
import './pokemonsList.css';

export default function PokemonsList(props) {
  const {
    pokemons, isFailed, isLoading, children,
  } = props;

  if (isLoading) {
    return <Loader />;
  }

  if (isFailed) {
    return <h1>Oops... Something went wrong...</h1>;
  }

  return (
    <>
      <div className="pokemons">
        {pokemons}
      </div>
      {children}
    </>
  );
}
