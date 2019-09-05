import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonRaw = ( props ) => {
  const { id, name, catched } = props.pokemon;
  const handleCatch  = props.handleCatch;
  
  return (
        <div className="card text-left col-12 col-sm-12 col-md-6 col-xl-3 shadow " >
          <Link to={`/pokemon/${id}`} className="nav-link"  >
              <img className="card-img" src={ `../../../database/pokemons/${id}.png` } alt={name}/>
              <h5 className="card-title">{ name }</h5>
          </Link>
          <div className="card-body">
            <p className="card-text">
              State: {catched? 'Catched':'Free' }
            </p>
            <button type="button" className="btn btn-dark"  onClick={ handleCatch(id) } disabled={ catched }>catch</button>
          </div>
        </div>
  )
}


