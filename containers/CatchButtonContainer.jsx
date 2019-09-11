import React, { Component } from 'react';
import {pokemonsService} from '../scripts/pokemonsService';
import { CatchButton } from '../components/CatchButton/CatchButton';

export class CatchButtonContainer extends Component{

    state = {
        caught: null
    }

    componentDidMount(){
        const {id} = this.props;
        pokemonsService.getCaughtPokemon(id)
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
        const { id, name, img }=this.props;
        pokemonsService.catchPokemon(id,name,img)
        .then(data => {
            this.setState({caught:true})
        })
        .catch(error => {
            console.log(error)
        });
    }

    render(){
        const {caught} = this.state;
        let buttonText = '';
        caught? buttonText='Пойман' : buttonText='Поймать';
        if (caught===null) return (<></>)
        else return(
            <CatchButton onClick={this.handleCatchButton} disable={caught} text={buttonText} />
        )
    }

}


