import React, { Component } from 'react';
import { isEmpty, upperFirst } from 'lodash';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import { PLACEHOLDER_IMAGE } from '../../constants';

export default class Pokemon extends Component {
  static addDefaultSrc(e) {
    e.target.src = PLACEHOLDER_IMAGE;
  }

  constructor(props) {
    super(props);
    this.isCatched = this.isCatched.bind(this);
  }

  componentDidMount() {
    const { fetchPokemon } = this.props;
    const { match: { params: { id } } } = this.props;
    fetchPokemon(id);
  }

  isCatched() {
    const { catched } = this.props;
    return !isEmpty(catched);
  }

  render() {
    const { data: { name, id } } = this.props;
    const { catched, isLoading, isFailed } = this.props;

    return (
      <PokemonInfo
        isLoading={isLoading}
        isFailed={isFailed}
        id={id}
        name={upperFirst(name)}
        catched={this.isCatched() ? catched : false}
        addDefaultSrc={Pokemon.addDefaultSrc}
      />
    );
  }
}
