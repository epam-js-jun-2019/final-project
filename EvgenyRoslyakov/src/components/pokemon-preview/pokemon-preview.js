import React from 'react';
import './pokemon-preview.css';

const PokemonPreview = (props) => {
    return (
        <div className="pokemon-preview">
            <span>{props.pokemon.name}</span>
            <img src={props.imgPath} />
        </div>
    )
}

export default PokemonPreview;