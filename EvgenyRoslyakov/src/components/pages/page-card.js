import React, { Component } from 'react';
import LSWorker from '../../services/localstorage-worker';
import PokemonCard from '../pokemon-card/pokemon-card';

class PageCard extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemon: {} };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleOpenCard = this.handleOpenCard.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const data = this.handleOpenCard(id);
        this.setState({pokemon: data});
    }

    handleOpenCard(id) {
        return LSWorker.readLSDataById(id)
    }

    render() {
        return (
            <PokemonCard data={this.state.pokemon} />
        )
    }
}

export default PageCard;