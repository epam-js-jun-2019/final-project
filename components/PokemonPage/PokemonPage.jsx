import React from 'react';

import './PokemonPage.scss';
import { CaptureDateContainer } from '../../containers/CaptureDateContainer';
import {CatchButtonContainer} from '../../containers/CatchButtonContainer'

export function PokemonPage(props){
    const {id, name, img } = props;
    return(
        <section className="pokemon">
            <img src={img} className="pokemon__image" />
            <div className="pokemon__desk">
                <span>Это {name}, его номер {id}</span>
                <CaptureDateContainer id={id}/>
                <CatchButtonContainer id={id} name={name} img={img}/>
            </div>
        </section>
    )
}