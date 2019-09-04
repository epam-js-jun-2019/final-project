import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';

class BigCard extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            pokemon: {}
          };
        }
    
    componentDidMount() {
        fetch(`http://localhost:3000/pokemons/${this.props.id}`)
        .then(response => response.json())
        .then(data => this.setState({ pokemon: data }))
    }

    handleClick() {
        this.setState(state => ({
            active: !state.active
          }));      
        const url = `http://localhost:3000/pokemons/${this.props.id}`;
        const data = {
            name: this.state.pokemon.name,
            catched: 1,
            date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
        }
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json'}
            })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
    }

    render() {
        const pokemon = this.state.pokemon;
        let pokemonStatus = false;
        
        if (this.state) {
            pokemonStatus = this.state.active;
            console.log(pokemonStatus);
        }    
    
        return (
            <>
            <Card title={`${pokemon.name}`}  style={{ width: '100%', textTransform: 'capitalize' }}>
                <h3>Pokemon ID:{pokemon.id}</h3>
                {pokemon.catched ? (<h3>Catched {pokemon.date}</h3>) : null }
            
                <img src={`/pokemons/${this.props.id}.png`} width='100%' onClick={this.showModal} />
                
                {pokemon.catched ? null : (<Button type="primary" block={true} onClick={this.handleClick} disabled={pokemonStatus ? true : false}>
                    {pokemonStatus ? 'Catched!' : 'Catch'}
                </Button>) }
            

            </Card>
            </>
        );
    }
}

export default BigCard;