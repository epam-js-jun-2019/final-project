import React from 'react';
import { Link } from 'react-router-dom';
import './cardView.css';

export default function ({ id, name, button, addDefaultSrc }) {
  return (
    <div className="card">
      <Link to={`/pokemons/${id}`}>
        <img src={`/assets/img/${id}.png`} onError={addDefaultSrc} className="card-img-top img-fluid" alt="..." />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {button}
      </div>
    </div>
  );
}