import React from 'react';

import Pokemon from 'Components/pokemon/pokemon.hoc';
import SearchBox from 'Components/search-box/search-box.component';
import Pagination from 'Components/pagination/pagination.component';
import PropTypes from 'prop-types';

import './pokemons-page.styles.scss';

class PokemonsPage extends React.Component {
  static propTypes = {
    collection: PropTypes.array.isRequired,
    isLoading: PropTypes.bool
  };

  state = {
    searchField: '',
    isPaginationWindow: false,
    currentPage: 1,
    pokemonsPerPage: 20
  };

  togglePaginationWindow = () =>
    this.setState({ isPaginationWindow: !this.state.isPaginationWindow });

  paginate = pageNumber => this.setState({ currentPage: pageNumber });

  handleSearch = e => this.setState({ searchField: e.target.value });

  filterPokemons = pokemons =>
    pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

  renderPokemons = pokemons =>
    pokemons
      .map(({ id, ...collectionProps }) => (
        <Pokemon key={id} id={id} {...collectionProps} />
      ))
      .sort((a, b) => (a.props.id > b.props.id ? 1 : -1));

  render() {
    const { collection, isLoading } = this.props;
    const { pokemonsPerPage, currentPage, isPaginationWindow } = this.state;

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

    let currentPokemons;
    let filteredPokemons;

    if (collection) {
      currentPokemons = collection.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
      );
      filteredPokemons = this.filterPokemons(currentPokemons);
    }

    return isLoading ? (
      <h1 style={{ color: 'white', marginLeft: '45%' }}>Loading...</h1>
    ) : (
      <div className='homepage' id='homepage'>
        <div className='search-box__container'>
          <SearchBox
            placeholder='search pokemons'
            handleChange={this.handleSearch}
          />
        </div>
        <div className='pagination__container'>
          <a
            className='pagination__toggler'
            onClick={() => this.togglePaginationWindow()}
          >
            More pages
          </a>
          {collection && isPaginationWindow && (
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              currentPage={currentPage}
              totalPokemons={collection.length}
              paginate={this.paginate}
            />
          )}
        </div>
        <div className='pokemons'>
          {collection && this.renderPokemons(filteredPokemons)}
        </div>
        <a className='to-begin-button' href='#homepage'>
          To Top
        </a>
      </div>
    );
  }
}

export default PokemonsPage;
