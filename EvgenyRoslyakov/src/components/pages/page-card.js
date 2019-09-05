import React, { Component } from 'react';
import LSWorker from '../../services/localstorage-worker';
import PokemonCard from '../pokemon-card/pokemon-card';

class PageCard extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemon: {} };

        this.handleOpenCard = this.handleOpenCard.bind(this);
    }

    componentDidMount() {
        const id = this.props.routeProps.match.params.id;
        const data = this.handleOpenCard(id);
        this.setState({pokemon: data});
    }

    handleOpenCard(id) {
        return LSWorker.readLSData(this.props.page)
                             .find(item => id == item.id);
    }

    render() {
        console.log(this.state.pokemon);
        return (
            <PokemonCard data={this.state.pokemon} />
        )
    }
}

export default PageCard;