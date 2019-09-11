import React, { Component } from 'react';
import { PokemonPage } from '../components/PokemonPage/PokemonPage';
import { Loading } from '../components/Loading/Loading';
import { pokemonsService } from '../scripts/pokemonsService';

export class PokemonPageContainer extends Component{
    state={
        name: null,
        img: null
    }


    componentDidMount(){
        const id = this.props.match.params.id;
        pokemonsService.getPokemon(id)
        .then(data => {
            this.setState({name:data[0].name, img:data[0].img});
        })
        .catch(error => {
            console.log('Request failed', error);
        });
    }


    render(){
        const id = parseInt(this.props.match.params.id);
        const {name, img} = this.state;
        return (
            <>
                {name&&img? <PokemonPage id={id} name={name} img={img}/> : <Loading />}
            </>
        )
    }
}