import './PokemonCard.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { CatchButtonContainer } from '../../containers/CatchButtonContainer'

export function PokemonCard(props){
        const { id, name, img } = props;
        const pokemonPage = `/pokemon/${id}`;
        return (
                <section className="card">
                    <Link to={pokemonPage}><img className="card__image" src={img}/></Link>
                    <div className="card__text">
                        <Link to={pokemonPage}><span>{ name }</span></Link>
                        <CatchButtonContainer id={id} name={name} img={img}/>
                    </div>
                </section>
        )

}