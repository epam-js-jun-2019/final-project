import React from 'react';
import { setPokemonState } from '../../actions/setPokemonState';
import Pagination from '../pagination/pagination';
import { PokemonRaw } from '../pokemonRaw/pokemonRaw';
import { Loader } from '../loader/loader';



export const PokemonsList = ( props ) => {

  const clicked = (id) => (e) => {
    const { dispatch } = props;
    e.preventDefault();
    dispatch(setPokemonState(id))
  }
  
  const { pokemonsOnPage, otherPages } = props;
  const isFetching = props.isFetching || false;
  
  return (
    <div className="container sm md lg xl h-100 " >
        <Loader isFetching={ isFetching } length={ pokemonsOnPage.length } />
        { pokemonsOnPage.length > 0 && 
          (<div className="row justify-content-left align-items-center">
            { 
              pokemonsOnPage.map( pokemon => 
                <PokemonRaw 
                  pokemon={ pokemon } 
                  handleCatch={ clicked }
                  key={ pokemon.id }
                /> ) 
            }
          </div>) }
        {otherPages >= 2 && <Pagination />} 
    </div>
  )
}



