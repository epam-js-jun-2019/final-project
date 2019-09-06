import React, { Component } from 'react';
import {Pokemon_page} from '../components/Pokemon_page/Pokemon_page'
import { getPokemonName } from '../scripts/getPokemonName';
import { Loading } from '../components/Loading/Loading';

export class PokemonPageContainer extends Component{
    state={
        name: null,
        img: null
    }


    getCustomPokemonName = () =>{
        const id = this.props.match.params.id;
        getPokemonName.bind(this,id)();
    }

    componentDidMount(){
        this.getCustomPokemonName();
    }


    render(){
        const id = parseInt(this.props.match.params.id);
        const {name, img} = this.state;
        return (
            <>
                {!name &&<Loading />}
                {name &&<Pokemon_page id={id} name={name} img={img}/>}
            </>
        )
    }
}