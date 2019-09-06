import React, { Component } from 'react';
import { upperFirst } from 'lodash';
import { PLACEHOLDER_IMAGE } from '../../constants';
import CardView from '../../components/CardView/CardView';

export default class Card extends Component {
  static addDefaultSrc(e) {
    e.target.src = PLACEHOLDER_IMAGE;
  }

  constructor(props) {
    super(props);
    this.handleCatch = this.handleCatch.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleCatch(id) {
    const { catchPokemon } = this.props;
    return () => catchPokemon({ id, date: Date.now() });
  }

  renderButton() {
    const { id, catchedPokemons } = this.props;
    const isCatched = catchedPokemons.some((e) => e.id === id);
    if (isCatched) {
      return <button type="button" className="btn btn-primary" disabled>Catched</button>;
    }
    return <button type="button" className="btn btn-primary" onClick={this.handleCatch(id)}>Catch</button>;
  }

  render() {
    const { name, id } = this.props;

    return (
      <CardView
        id={id}
        name={upperFirst(name)}
        button={this.renderButton()}
        addDefaultSrc={Card.addDefaultSrc}
      />
    );
  }
}
