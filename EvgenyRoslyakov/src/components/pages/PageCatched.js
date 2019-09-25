import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchDataSuccess } from '../../store/actions';
import PokemonList from '../PokemonList/PokemonList';
import PaginationBar from '../PaginationBar/PaginationBar';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
import PokemonService from '../../services/PokemonService';
import { CATEGORY_CATCHED } from '../../constants/constants';

const PageCatched = ({ viewedContent, currentPage,
                       category, fetchDataSuccess }) => {

    useEffect(() => {
        if(category === CATEGORY_CATCHED) {
            getCheckedContent(currentPage)
        } else return;
    }, [currentPage, category]);

    function getCheckedContent(page) {
        const content = PokemonService.prepareCatchedData(page);
        fetchDataSuccess(content);
    };

    const hasCatchedData = PokemonService.hasCatchedData();
    const message = !(hasCatchedData) ? <EmptyMessage /> : null;
    const content = (hasCatchedData) ?
                    (<Fragment>
                        <PokemonList data={viewedContent} />
                        <PaginationBar />
                    </Fragment>) :
                    null;
    return (
        <div className="pokedex main-container">
            {content}
            {message}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        category: state.category,
        viewedContent: state.viewedContent,
        currentPage: state.currentPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDataSuccess: data => dispatch(fetchDataSuccess(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageCatched);