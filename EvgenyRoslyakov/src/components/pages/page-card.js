import React, { Component } from 'react';
import AsyncProvider from '../../services/async-module';
import PokemonCard from '../pokemon-card/pokemon-card';

class PageCard extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemon: {} };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        AsyncProvider.getDataById(this.props.match.params.id)
                .then(data => this.setState({pokemon: data}));
    }

    render() {
        console.log(this.state.pokemon);
        return (
            <PokemonCard data={this.state.pokemon} />
        )
    }
}

export default PageCard;