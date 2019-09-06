import React from 'react';
import Pokemons from '../../containers/Pokemons/Pokemons';

export default function (props) {
  const {
    isLoading, isFailed, page, itemsPerPage, pokemons, switchPage,
  } = props;

  return (
    <>
      <h1>All pokemons</h1>
      <Pokemons
        isLoading={isLoading}
        isFailed={isFailed}
        page={page}
        itemsPerPage={itemsPerPage}
        pokemons={pokemons}
        switchPage={switchPage}
      />
    </>
  );
}
