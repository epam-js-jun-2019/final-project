import React from 'react';

import Pokemon from '../../components/pokemon/pokemon.component';
import SearchBox from '../../components/search-box/search-box.component';

import './homepage.styles.scss';

import * as data from '../../../db.json';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: data.pokemons,
      searchField: ''
    };
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { collection, searchField } = this.state;
    const filteredPokemons = collection.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='homepage'>
        <div className='search-box__container'>
          <SearchBox
            placeholder='search pokemons'
            handleChange={this.handleChange}
          />
        </div>
        <div className='pokemons'>
          {filteredPokemons.map(({ id, ...collectionProps }) => (
            <Pokemon key={id} id={id} {...collectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
