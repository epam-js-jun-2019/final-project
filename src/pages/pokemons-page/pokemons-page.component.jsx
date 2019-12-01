import React, { useState, useEffect } from 'react';

import Pokemon from '../../components/pokemon/pokemon.hoc';
import SearchBox from '../../components/search-box/search-box.component';
import Pagination from '../../components/pagination/pagination.component';
import PropTypes from 'prop-types';

import './pokemons-page.styles.scss';

const PokemonsPage = ({ collection, isLoading, getPokemonsAsync }) => {
  const initialState = {
    searchField: '',
    isPaginationWindow: false,
    currentPage: 1,
    pokemonsPerPage: 20
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    !collection.length && getPokemonsAsync();
    return () => null;
  }, [collection]);

  const {
    searchField,
    isPaginationWindow,
    currentPage,
    pokemonsPerPage
  } = state;

  const indexOfLastPokemon = currentPage * pokemonsPerPage;

  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const handleSearch = e => setState({ ...state, searchField: e.target.value });

  const togglePaginationWindow = () =>
    setState({ ...state, isPaginationWindow: !isPaginationWindow });

  const paginate = pageNumber =>
    setState({ ...state, currentPage: pageNumber });

  const filterPokemons = pokemons => {
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  const defineFilteredPokemons = (
    collection,
    indexOfLastPokemon,
    indexOfFirstPokemon
  ) => {
    let currentPokemons;

    if (collection.length) {
      currentPokemons = collection.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
      );
      return filterPokemons(currentPokemons);
    }
    return collection;
  };

  const renderPokemons = pokemons => {
    return pokemons
      .map(({ id, ...collectionProps }) => (
        <Pokemon key={id} id={id} {...collectionProps} />
      ))
      .sort((a, b) => a.props.id - b.props.id);
  };

  return isLoading ? (
    <div /> // Spinner placeholder
  ) : (
    <div className='homepage' id='homepage'>
      <div className='search-box__container'>
        <SearchBox placeholder='search pokemons' handleChange={handleSearch} />
      </div>
      <div className='pagination__container'>
        <a
          className='pagination__toggler'
          onClick={() => togglePaginationWindow()}
        >
          More pages
        </a>
        {collection && isPaginationWindow && (
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            currentPage={currentPage}
            totalPokemons={collection.length}
            paginate={paginate}
          />
        )}
      </div>
      <div className='pokemons'>
        {collection &&
          renderPokemons(
            defineFilteredPokemons(
              collection,
              indexOfLastPokemon,
              indexOfFirstPokemon
            )
          )}
      </div>
      <a className='to-begin-button' href='#homepage'>
        To Top
      </a>
    </div>
  );
};

PokemonsPage.propTypes = {
  collection: PropTypes.array.isRequired,
  isLoading: PropTypes.bool
};

export default PokemonsPage;
