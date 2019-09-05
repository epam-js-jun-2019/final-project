import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FreePokemons from '../components/pokemonsList/freePokemons';

import { fetchPokemonsIfNeeded  } from '../actions/requestDbActions';
import { fetchPokemonsLength } from '../actions/pagination';

export class PokemonsList extends React.Component  {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(fetchPokemonsIfNeeded());
    dispatch(fetchPokemonsLength());
  }

  render() {
    return (
      <FreePokemons/>
    )
  }
}


function mapStateToProps( state ) {
  return state
}

const UsualPokemons = withRouter(connect(mapStateToProps)(PokemonsList));
export default UsualPokemons;



