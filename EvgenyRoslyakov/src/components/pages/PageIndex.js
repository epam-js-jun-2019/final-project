import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchIndexData } from '../../store/actions';
import PaginationBar from '../PaginationBar/PaginationBar';
import PokemonList from '../PokemonList/PokemonList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';
import { CATEGORY_ALL } from '../../constants/constants';

const IndexPage = ({ currentPage, category, viewedContent,
                     error, isLoading, fetchIndexData }) => {

    useEffect(() => {
        if (category === CATEGORY_ALL) {
            fetchIndexData(currentPage)
        } else return;
    }, [currentPage, category]);
        
    const errorMessage = (error && !isLoading) ? <ErrorMessage /> : null;
    const spinner = isLoading ? 
                    (<Fragment>
                        <Spinner />
                        <PaginationBar />
                    </Fragment>):
                    null;
    const content = !(error || isLoading) ?
                    (<Fragment>
                        <PokemonList data={viewedContent} />
                        <PaginationBar />
                    </Fragment>) : 
                    null;
    return (
        <div className="pokedex main-container">
            {spinner}
            {content}
            {errorMessage}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        category: state.category,
        currentPage: state.currentPage,
        viewedContent: state.viewedContent,
        error: state.error,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchIndexData: page => dispatch(fetchIndexData(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);