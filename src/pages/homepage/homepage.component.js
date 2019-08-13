import React from 'react';

import Pokemon from '../../components/pokemon/pokemon.component';

import './homepage.styles.scss';

import * as data from '../../../db.json';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: data.pokemons
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className='homepage'>
        {collection.map(({ id, ...collectionProps }) => (
          <Pokemon key={id} id={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default HomePage;
