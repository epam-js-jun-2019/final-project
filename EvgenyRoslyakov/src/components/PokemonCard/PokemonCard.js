import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ data }) => {

    function convertDate(stamp) {
        const dateObj = new Date(stamp);
        const date = `${dateObj.getFullYear()}.${dateObj.getMonth()}.${dateObj.getDate()}`;
        const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
        return `${date} ${time}`;
    };
    
    const IMG_SRC = `/pokemons/${data.id}.png`;
    const classValue = (data.catched) ?
                        'pokemon-card pokemon-card__catched' :
                        'pokemon-card';
    const statusValue = (data.catched) ?
                        `catched ${convertDate(data.date)}` :
                        'free';
    return (
        <div className={classValue}>
            <h2>{data.id}</h2>
            <img src={IMG_SRC}
                 className="pokemon-pic"
                 alt={data.name} />
            <h2 className="pokemon-name">{data.name}</h2>
            <h3>{statusValue}</h3>
        </div>
    )
}

export default PokemonCard;