import React from 'react';
import './pokemon-card.css';

const PokemonCard = (props) => {
    return (
        <div className='pokemon-card'>
            <h2>{props.data.id}</h2>
            <img src={`/pokemons/${props.data.id}.png`}
                 className="pokemon-pic"
                 alt={props.data.name} />
            <h2 className="pokemon-name">{props.data.name}</h2>
            <h3>{(props.data.catched)? `catched ${props.data.date}` : 'free'}</h3>
        </div>
    )
}

export default PokemonCard;