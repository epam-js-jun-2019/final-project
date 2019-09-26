import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDataSuccess } from '../../store/actions';
import PokemonService from '../../services/PokemonService';
import LSService from '../../services/LocalstorageService';
import './PokemonListItem.css';

const PokemonPreview = ({ pokemon, currentPage, updateViewedContent }) => {
    
    const [ errImgLoading, setErrImgLoading ] = useState(false);
    const CARD_LINK = `/card/${pokemon.id}`;
    const IMG_PATH = `/pokemons/${pokemon.id}.png`;

    const buttonView = (!pokemon.catched) ? 
                        (<button className="btn-link btn-catch"
                                onClick={(e) => handleCatchClick(e, pokemon.id)}>
                            catch it!
                        </button>) :
                        (<span className="btn-disabled">catched</span>);
    const imgView = (!errImgLoading) ? 
                    (<Link to={CARD_LINK}>
                        <img className="img-miniature"
                             onError={() => setErrImgLoading(true)}
                             src={IMG_PATH}
                             alt="preview pic" />
                    </Link>) :
                    null;
    const classValue = (pokemon.catched) ?
                        'pokemon-preview pokemon-preview__catched' :
                        'pokemon-preview';

    function handleCatchClick(e, id) {
        e.stopPropagation();
        const dataToChange = LSService.readLSData(currentPage);
        const newData = PokemonService.updateDataToCatched(dataToChange, id);
        LSService.writeLSData(currentPage, newData);
        updateViewedContent(newData);
    };

    return (
            <div className={classValue}>
                <div className="leftside">
                    {buttonView}
                    <Link to={CARD_LINK}>
                        <h4>{pokemon.name}</h4>
                    </Link>
                </div>
                {imgView}
            </div>
    );
};

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateViewedContent: currentPage => {
            return dispatch(fetchDataSuccess(currentPage));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPreview);