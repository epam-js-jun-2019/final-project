import React from 'react';

import Pokemon from '../../HOCs/pokemon.hoc';
import SearchBox from 'Components/search-box/search-box.component';
import Pagination from 'Components/pagination/pagination.component';

import './pokemons-page.styles.scss';

class PokemonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      paginationWindow: false,
      currentPage: 1,
      pokemonsPerPage: 20
    };
  }

  togglePaginationWindow = () =>
    this.setState({ paginationWindow: !this.state.paginationWindow });

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
    const { collection, loading } = this.props;
    const { pokemonsPerPage, currentPage, paginationWindow } = this.state;

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

    return loading ? (
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
          {collection && paginationWindow ? (
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              currentPage={currentPage}
              totalPokemons={collection.length}
              paginate={this.paginate}
            />
          ) : null}
        </div>
        <div className='pokemons'>
          {collection ? this.renderPokemons(filteredPokemons) : null}
        </div>
        <a className='to-begin-button' href='#homepage'>
          To Top
        </a>
      </div>
    );
  }
}

export default PokemonsPage;
