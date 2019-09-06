import React, { Component } from 'react';
import { Catch_button } from '../components/Catch_button/Catch_button';
import {catchPokemon} from '../scripts/catchPokemon'

export class CatchButtonContainer extends Component{

    state = {
        caught: null
    }

    componentDidMount(){
        const {id} = this.props;
        fetch(`http://localhost:3000/caught_pokemons/?id=${id}`, {
        headers: {
        'Content-Type': 'application/json',
        }})
        .then(response => response.json())
        .then(data => {
            if (data.length!=0){
                this.setState({caught:true})
            }
            else {
                this.setState({caught:false})
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleCatchButton =()=>{
        this.catchCustomPokemon();
    }

    catchCustomPokemon = () =>{
        const { id, name, img }=this.props;
        catchPokemon.bind(this, id, name, img)();
    }

    render(){
        const {caught} = this.state;
        if (caught===null) return (<></>)
        else return(
                <>
                    {caught && <Catch_button onClick={this.handleCatchButton} disable={caught} text='Пойман' />}
                    {!caught && <Catch_button onClick={this.handleCatchButton} disable={caught} text='Поймать' />}
                </>
            )
    }

}


