import React from 'react';
import PokemonListItem from '../PokemonListItem/PokemonListItem';
import './PokemonList.css';

const PokemonList = ({ data }) => {
    
    function mapHelper(data) {
        return data.map(pokemon => {
            return (
                <li key={pokemon.id}>
                    <PokemonListItem pokemon={pokemon} />
                </li>
                )
            });
    };
    return (
        <ul className="pokemons-list">
            {mapHelper(data)}
        </ul>
    )
}

export default PokemonList;