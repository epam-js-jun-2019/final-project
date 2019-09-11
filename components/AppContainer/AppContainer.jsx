import React, { useEffect } from 'react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './AppContainer.scss';

export function AppContainer(props) {
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
            {pokemons.map(pokemon => <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} img={pokemon.img}/>) }    
        </section>
    );
}
