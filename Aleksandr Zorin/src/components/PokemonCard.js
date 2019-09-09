import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PokemonCard extends Component {
    constructor(props) {
        super(props)
        this.pokemon = this.props.pokemon;
        this.state={catched : this.props.pokemon.date ? true :false };

        this.catch = this.catch.bind(this);
    }

    catch() {
        fetch('http://localhost:3000/pokemons/'+this.pokemon.id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name: this.pokemon.name, id:this.pokemon.id, date : new Date()})
          })
          .then(responce => this.setState({catched : true}));
    }

    render() {
        return (
            <div className="card col-sm-4">
                <div className="card-header"><Link to={`/pokemons/${this.pokemon.id}`}>{this.pokemon.name}</Link></div>
                <img src={`/pokemons/${this.pokemon.id}.png`} className="card-img-top" alt={this.pokemon.name} />
                <div className="card-body">
                    <button className="btn btn-primary" onClick={this.catch} disabled={this.state.catched}>Catch</button>
                </div>
            </div>
        )
    }
}

export default PokemonCard;