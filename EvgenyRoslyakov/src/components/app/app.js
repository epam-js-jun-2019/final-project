import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import PokemonPreview from '../pokemon-preview/pokemon-preview';
import AsyncProvider from '../../services/async-module';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        AsyncProvider.getLimitedData(30)
                        .then(data => this.setState({ data: data }))
                        .catch(error => console.log(error))
    }

    render() {
        console.log(AsyncProvider);
        const liItems = this.state.data.map(item => {
            return (
                <li key={item.id}>
                    <PokemonPreview pokemon={item}
                                    imgPath={`/pokemons/${item.id}.png`} />
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