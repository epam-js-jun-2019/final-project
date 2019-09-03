import React from 'react';
import './pokemon-preview.css';

const PokemonPreview = (props) => {
    return (
        <div className="pokemon-preview"
             onClick={() => props.onOpen(props.pokemon.id)}>
            <div className="leftside">
                <button className="btn-link btn-catch"
                        onClick={(e) => props.onCatch(e, props.pokemon)}>catch it!</button>
                <h3>{props.pokemon.name}</h3>
            </div>
            <img className="img-miniature"
                 src={props.imgPath} />
        </div>
    )
}

export default PokemonPreview;