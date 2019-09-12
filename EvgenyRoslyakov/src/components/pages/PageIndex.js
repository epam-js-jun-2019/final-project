import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoadedPokemons } from '../../store/actions';
import PaginationBar from '../PaginationBar/PaginationBar';
import PokemonList from '../PokemonList/PokemonList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import AsyncProvider from '../../services/AsyncProvider';
import LSService from '../../services/LocalstorageService';

const IndexPage = (props) => {

    const { viewedContent, currentPage, category } = props;
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (category === 'all') {
            getIndexContent(currentPage)
        } else return;
    }, [currentPage, category]);

    function getIndexContent(page) {
        if(LSService.isInLS(page)) {
            const content = LSService.readLSData(page);
            props.setLoadedPokemons(content);
        } else {
            setLoading(true);
            AsyncProvider.getLimitedData(page)
                        .then(response => LSService.writeLSData(page, response))
                        .then(content => {
                            setLoading(false);
                            props.setLoadedPokemons(content);
                        })
                        .catch(err => {
                            setError(true);
                            setLoading(false);
                            console.log(err);
                        })
        }
    };
        
    const errorMessage = (isError && !isLoading) ?
                         <ErrorMessage /> :
                         null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = !(isError || isLoading) ?
                    (<React.Fragment>
                        <PokemonList data={viewedContent} />
                        <PaginationBar />
                    </React.Fragment>) : 
                    null;
    return (
        <div className="pokedex main-container">
            {spinner}
            {content}
            {errorMessage}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.category,
        viewedContent: state.viewedContent,
        currentPage: state.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadedPokemons: (data) => dispatch(setLoadedPokemons(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);