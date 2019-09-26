import React, { useState, useEffect } from 'react';
import LSWorker from '../../services/LocalstorageService';
import PokemonCard from '../PokemonCard/PokemonCard';
 
const PageCard = (props) => {
    const id = props.match.params.id;
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        setPokemon(LSWorker.readLSDataById(id));
    }, []);
    
    return (
        <PokemonCard data={pokemon} />
    )
}

export default PageCard;