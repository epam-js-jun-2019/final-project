import React from 'react';
import PokemonPreview from '../pokemon-preview/pokemon-preview';
import './pokemons-list.css';

const PokemonsList = (props) => {

    function mapHelper(data) {
        return data.map(pokemon => {
            return (
                <li key={pokemon.id}>
                    <PokemonPreview 
                        pokemon={pokemon}
                        imgPath={`/pokemons/${pokemon.id}.png`}
                        onCatch={props.onCatch} />
                </li>
                )
            });
    };
    return (
        <ul className="pokemons-list">
            {mapHelper(props.data)}
        </ul>
    )
}

export default PokemonsList;