import React from 'react';

import { connect } from 'react-redux';

import Pokemon from 'Components/pokemon/pokemon.component';
import SearchBox from 'Components/search-box/search-box.component';

import './captured-pokemons-page.styles.scss';

class CapturedPokemonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ''
    };
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { collection } = this.props;
    const { searchField } = this.state;
    let filteredPokemons;
    if (collection) {
      filteredPokemons = collection.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchField.toLowerCase())
      );
    }
    return (
      <div className='homepage'>
        <div className='search-box__container'>
          <SearchBox
            placeholder='search pokemons'
            handleChange={this.handleChange}
          />
        </div>
        <div className='pokemons'>
          {collection
            ? filteredPokemons.map(({ id, ...collectionProps }) => (
                <Pokemon key={id} id={id} {...collectionProps} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons: { pokemons } }) => ({
  collection: pokemons
    ? pokemons.filter(pokemon => pokemon.status !== 'free')
    : null
});

export default connect(mapStateToProps)(CapturedPokemonsPage);
