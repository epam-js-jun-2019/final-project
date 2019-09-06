import React, { Component } from 'react';
import Card from '../../containers/Card/index';
import Pagination from '../../containers/Pagination/Pagination';
import PokemonsList from '../../components/PokemonsList/PokemonsList';

export default class Pokemons extends Component {
  constructor(props) {
    super(props)
    this.renderPokemons = this.renderPokemons.bind(this);
  }

  renderPokemons() {
    const { pokemons, page, itemsPerPage } = this.props;
    const from = page * itemsPerPage - itemsPerPage;
    const to = from + itemsPerPage;

    return pokemons
      .slice(from, to)
      .map(item => <Card key={item.id} {...item} />);
  }

  render() {
    const { pokemons, isFailed, isLoading, page, itemsPerPage, switchPage } = this.props;

    return (
      <PokemonsList isFailed={isFailed} isLoading={isLoading} pokemons={this.renderPokemons()}>
        <Pagination switchPage={switchPage} page={page} itemsNumber={pokemons.length} itemsPerPage={itemsPerPage} />
      </PokemonsList>
    );
  }
}