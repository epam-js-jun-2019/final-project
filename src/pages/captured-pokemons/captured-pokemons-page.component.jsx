import React from 'react';
import PokemonsPage from 'Pages/pokemons-page/pokemons-page.component';

import './captured-pokemons-page.styles.scss';

const CapturedPokemonsPage = ({ collection }) => {
  return (
    <>
      <PokemonsPage collection={collection} />
    </>
  );
};

export default CapturedPokemonsPage;
