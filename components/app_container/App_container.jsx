import React, { useEffect } from 'react';
import { Pockemon_card } from '../pockemon_card/Pockemon_card';
import './app_container.scss';

export function App_container(props) {
    const { pokemons, onScroll } = props;

    const handleScoll = () =>{
        if(window.innerHeight + document.documentElement.scrollTop != document.documentElement.offsetHeight){
            return;
        }

        if(typeof onScroll === 'function'){
            onScroll();
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScoll);

        return () => window.removeEventListener('scroll', handleScoll);
    }, [])

    return (
        <section className="app__container">
            {pokemons.map(pokemon => <Pockemon_card key={pokemon.id} id={pokemon.id} name={pokemon.name}/>) }    
        </section>
    );
}