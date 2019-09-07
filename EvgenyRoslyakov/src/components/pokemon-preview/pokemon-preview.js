import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon-preview.css';

const PokemonPreview = (props) => {
    const buttonView = (!props.pokemon.catched) ? 
                        <button className="btn-link btn-catch"
                                onClick={(e) => props.onCatch(e, props.pokemon.id)}>
                            catch it!
                        </button> :
                        <span className="btn-disabled">catched</span>;
                        
    return (
            <div className={`pokemon-preview ${(props.pokemon.catched) ? 'pokemon-preview__catched' : ''}`}>
                <div className="leftside">
                    {buttonView}
                    <Link to={`/card/${props.pokemon.id}`}>
                        <h4>{props.pokemon.name}</h4>
                    </Link>
                </div>
                <Link to={`/card/${props.pokemon.id}`}>
                    <img className="img-miniature"
                         src={props.imgPath}
                         alt="preview pic" />
                </Link>
            </div>
    )
}

export default PokemonPreview;