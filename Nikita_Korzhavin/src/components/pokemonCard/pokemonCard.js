import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Card = ( { pokemon: { id, name, catched, catchDate } } ) => (
    <div className="container sm md lg xl" >
      <div className="row h-100 justify-content-center align-items-center">
        <div className="card pokemon-card text-left col-12 col-sm-8 col-md-6 col-xl-4 shadow" >
          <img className="card-img-top" src={`../../../database/pokemons/${id}.png`} alt={name}/>
          <div className="card-body">
            <h5 className="card-title">Name: { name }</h5>
            <p className="text-muted">ID: {id}</p>
            <p className="text-muted">Current State: {catched? 'Catched':'we don\'t have this pokemon' }</p>
            {catched? (<p className="text-muted">Catched: {catchDate}</p>):""}
          </div>
        </div>
      </div>
    </div>
  )


function mapStateToProps( state, otherOnes ) {
 
  const { fetchedPokemons } = state;

  const pokemon = fetchedPokemons.items[otherOnes.match.params.id]
  return {
    pokemon
  }
}
const PokemonCard = withRouter(connect(mapStateToProps)(Card))
export default PokemonCard ;