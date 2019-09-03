import React from 'react';
import PokemonPreview from '../pokemon-preview/pokemon-preview';
import './pokemons-list.css';

const PokemonsList = (props) => {
    const liContent = props.data.map(pokemon => {
        return (
            <li key={pokemon.id}>
                <PokemonPreview 
                    pokemon={pokemon}
                    imgPath={`/pokemons/${pokemon.id}.png`}
                    onCatch={props.onCatch}
                    onOpen={props.onOpen} />
            </li>)
        });
    return (
        <ul className="pokemons-list">
            { liContent }
        </ul>
    )
}

export default PokemonsList;