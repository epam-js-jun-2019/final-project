import React, { Component } from 'react';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import { isEmpty, upperFirst } from 'lodash';
import { PLACEHOLDER_IMAGE } from '../../constants';

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.addDefaultSrc = this.addDefaultSrc.bind(this);
    this.isCatched = this.isCatched.bind(this);
  }

  componentDidMount() {
    const { fetchPokemon } = this.props;
    const id = this.props.match.params.id;
    fetchPokemon(id);
  }

  isCatched() {
    const { catched } = this.props;
    return isEmpty(catched) ? false : true;
  }

  addDefaultSrc(e) {
    e.target.src = PLACEHOLDER_IMAGE;
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
        addDefaultSrc={this.addDefaultSrc}
      />
    );
  }
}