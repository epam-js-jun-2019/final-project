import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon-preview.css';

const PokemonPreview = (props) => {
    const buttonView = (!props.pokemon.catched) ? 
                        <button className="btn-link btn-catch"
                                onClick={(e) => props.onCatch(e, props.pokemon)}>catch it!</button> :
                        <span className="btn-disabled">catched</span>
                        
    return (
            <div className="pokemon-preview">
                <div className="leftside">
                    {buttonView}
                    <Link to={`/pokemons/${props.pokemon.id}`}>
                        <h3>{props.pokemon.name}</h3>
                    </Link>
                </div>
                <Link to={`/pokemons/${props.pokemon.id}`}>
                    <img className="img-miniature"
                         src={props.imgPath}
                         alt="preview pic" />
                </Link>
            </div>
    )
}

export default PokemonPreview;