import React from 'react';
import { connect } from 'react-redux';
import PokemonsPage from 'Pages/pokemons-page/pokemons-page.component';

import './free-pokemons-page.styles.scss';

const FreePokemonsPage = ({ collection }) => {
  return (
    <div>
      <PokemonsPage collection={collection} />
    </div>
  );
};

const mapStateToProps = ({ pokemons: { freePokemons } }) => ({
  collection: freePokemons || null
});

export default connect(mapStateToProps)(FreePokemonsPage);
