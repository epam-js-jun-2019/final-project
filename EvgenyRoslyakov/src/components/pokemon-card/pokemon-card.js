import React from 'react';

const PokemonCard = (props) => {
    return (
        <div className='pokemon-card'>
            <h2>{props.id}</h2>
            <img src={`/pokemons/${props.src}.png`} alt={`${props.name} pic`}/>
            <h2>{props.name}</h2>
            <h3>{(props.catched)? `catched ${props.date}` : 'free'}</h3>
        </div>
    )
}

export default PokemonCard;