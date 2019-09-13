import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { setLoadedPokemons } from '../../store/actions';
import PokemonList from '../PokemonList/PokemonList';
import PaginationBar from '../PaginationBar/PaginationBar';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
import PokemonService from '../../services/PokemonService';

const PageCatched = (props) => {
    const { viewedContent, currentPage,
            category, setLoadedPokemons } = props;

    useEffect(() => {
        if(category === 'catched') {
            getCheckedContent(currentPage)
        } else return;
    }, [currentPage, category]);

    function getCheckedContent(page) {
        const content = PokemonService.prepareCatchedData(page);
        setLoadedPokemons(content);
    }

    const message = !(PokemonService.hasCatchedData()) ? <EmptyMessage /> : null;
    const content = (PokemonService.hasCatchedData()) ?
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
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
        viewedContent: state.viewedContent,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadedPokemons: data => dispatch(setLoadedPokemons(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCatched);