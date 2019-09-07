import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/PokemonTab.css';
const S = "NO POKEMON";
import Modal from './Modal'


export default class PokemonTab extends React.Component{
    constructor(props){
        super(props);
        this.state={loaded: true, catch: {}, date: null, show: false};
        this.catched = this.catched.bind(this);
    }

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
    }

    catched(){
        this.setState({catch: true});
        this.disabled;
        const pokedate = new Date();
        const url = 'http://localhost:3000/catched';
        const pokemons = {
            name: this.props.pokemon.name,
            id: this.props.pokemon.id,
            date: pokedate,
            caught: 1,
        };
        return fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(pokemons),
                headers:{
                    'Content-Type': 'application/json'
                }
        }).then(res => res.json());
    }
    
    componentDidMount(){
        fetch(`http://localhost:3000/catched/${this.props.pokemon.id}`)
            .then(response => response.json())
            .then(data => this.setState({ catch: data }))
    }

    render(){
        console.log(this.state.catch.caught)
        return(
            <>
            <div className="tabs__tab">
                <img src={`../images/${this.props.pokemon.id}.png`} onClick={e=>{this.showModal(e);}} alt="" onError={(e)=>{e.target.onerror=null; e.target.src="../images/alt.png"; this.setState({loaded: false});} }></img>
                <h1 onClick={e=>{this.showModal(e);}}>{this.state.loaded ? this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1) : S}</h1>
                <button className="catchbutton" onClick={this.catched} disabled={(this.state.catch.caught != 1)  ? false : true}>CATCH</button>
            </div>
            <Modal show={this.state.show} onClose={this.showModal} pokemon={this.props.pokemon}/>
            </>
        );
    }
}
