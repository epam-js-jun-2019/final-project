import React from 'react';
import PokemonPreview from '../pokemon-preview/pokemon-preview';
import ErrorMessage from '../error-message/error-message';
import Spinner from '../spinner/spinner';
import './pokemons-list.css';

const PokemonsList = (props) => {

    const MapHelper = data => {
        return data.map(pokemon => {
            return (
                <li key={pokemon.id}>
                        <PokemonPreview pokemon={pokemon}
                                        imgPath={`/pokemons/${pokemon.id}.png`}
                                        onCatch={props.onCatch} />
                </li>
                )
            });
    }

    const errorMessage = (props.isError && !props.isLoading) ?
                                            <ErrorMessage /> : 
                                                         null;
    const spinner = props.isLoading ? <Spinner /> : null;
    const content = !(props.isError || props.isLoading) ?
                                  MapHelper(props.data) : 
                                                    null;
    return (
        <ul className="pokemons-list">
            {errorMessage}
            {spinner}
            {content}
        </ul>
    )
}

export default PokemonsList;