import React from 'react';
import { connect } from 'react-redux';
import PokemonsPage from 'Pages/pokemons-page/pokemons-page.component';

import './captured-pokemons-page.styles.scss';

const CapturedPokemonsPage = ({ collection }) => {
  return (
    <div>
      <PokemonsPage collection={collection} />
    </div>
  );
};

const mapStateToProps = ({ pokemons: { capturedPokemons } }) => ({
  collection: capturedPokemons || null
});

export default connect(mapStateToProps)(CapturedPokemonsPage);
