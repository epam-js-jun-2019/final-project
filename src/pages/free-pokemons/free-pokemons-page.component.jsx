import React from 'react';
import PokemonsPage from 'Pages/pokemons-page/pokemons-page.component';

import './free-pokemons-page.styles.scss';

const FreePokemonsPage = ({ collection }) => {
  return (
    <>
      <PokemonsPage collection={collection} />
    </>
  );
};

export default FreePokemonsPage;
