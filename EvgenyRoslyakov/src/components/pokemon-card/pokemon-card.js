import React from 'react';
import './pokemon-card.css';

const PokemonCard = (props) => {
    function convertDate(stamp) {
        const dateObj = new Date(stamp);
        const date = `${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDate()}`;
        const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
        return `${date} ${time}`;
    }
    return (
        <div className={`pokemon-card ${(props.data.catched) ? 'pokemon-card__catched' : ''}`}>
            <h2>{props.data.id}</h2>
            <img src={`/pokemons/${props.data.id}.png`}
                 className="pokemon-pic"
                 alt={props.data.name} />
            <h2 className="pokemon-name">{props.data.name}</h2>
            <h3>{(props.data.catched)? `catched ${convertDate(props.data.date)}` : 'free'}</h3>
        </div>
    )
}

export default PokemonCard;