import React from 'react';

import Pokemon from 'Components/pokemon/pokemon.component';
import SearchBox from 'Components/search-box/search-box.component';
import Pagination from 'Components/pagination/pagination.component';

import './pokemons-page.styles.scss';

class PokemonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      paginationWindow: false,
      togglePaginationWindow: () =>
        this.setState(state => {
          return { ...state, paginationWindow: !this.state.paginationWindow };
        }),
      currentPage: 1,
      pokemonsPerPage: 12,
      paginate: pageNumber =>
        this.setState(state => {
          return { ...state, currentPage: pageNumber };
        })
    };
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { collection, loading } = this.props;
    const {
      searchField,
      pokemonsPerPage,
      currentPage,
      paginate,
      paginationWindow,
      togglePaginationWindow
    } = this.state;
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    let currentPokemons;
    let filteredPokemons;
    if (collection) {
      currentPokemons = collection.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
      );
      filteredPokemons = currentPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchField.toLowerCase())
      );
    }

    return loading ? (
      <h1 style={{ color: 'white', marginLeft: '45%' }}>Loading...</h1>
    ) : (
      <div className='homepage' id='homepage'>
        <div className='search-box__container'>
          <SearchBox
            placeholder='search pokemons'
            handleChange={this.handleChange}
          />
        </div>
        <div className='pagination__container'>
          <a
            className='pagination__toggler'
            onClick={() => {
              togglePaginationWindow();
            }}
          >
            More pages
          </a>
          {collection && paginationWindow ? (
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              currentPage={currentPage}
              totalPokemons={collection.length}
              paginate={paginate}
            />
          ) : null}
        </div>
        <div className='pokemons'>
          {collection
            ? filteredPokemons
                .map(({ id, ...collectionProps }) => (
                  <Pokemon key={id} id={id} {...collectionProps} />
                ))
                .sort((a, b) => (a.props.id > b.props.id ? 1 : -1))
            : null}
        </div>
        <a className='to-begin-button' href='#homepage'>
          To Top
        </a>
      </div>
    );
  }
}

export default PokemonsPage;
