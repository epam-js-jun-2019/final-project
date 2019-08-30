import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import PokemonPreview from '../pokemon-preview/pokemon-preview';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8087/pokemons?_limit=30')
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Couldn't fetch, status ${response.status}`)
                }
                return response.json()
            })
            .then(data => this.setState({ data: data }))
            .catch(error => console.log(error))
    }

    render() {
        const liItems = this.state.data.map(item => {
            let imgPath = `/pokemons/${item.id}.png`;
            return (
                <li key={item.id}>
                    <PokemonPreview pokemon={item}
                                    imgPath={imgPath} />
                </li>
            )
        });
        return (
            <div className="pokedex main-container">
                <AppHeader />
                <ul className="pokemons-list" data={this.state.data}>
                    { liItems }
                </ul>
            </div>
        )
    }
}

export default App;