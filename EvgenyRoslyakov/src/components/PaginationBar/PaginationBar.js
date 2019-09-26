import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonService from '../../services/PokemonService';
import LSService from '../../services/LocalstorageService';
import { setPageNumber } from '../../store/actions';
import { MAX_DATA_NUM, CATEGORY_ALL, CATEGORY_CATCHED } from '../../constants/constants';
import './PaginationBar.css';

const PaginationBar = (props) => {
    const { currentPage, category, setPageNumber } = props;
    const maxPage = (category === CATEGORY_ALL) ? 
                    PokemonService.getMaxPage(MAX_DATA_NUM) :
                    PokemonService.getMaxPage(LSService.readLSData(CATEGORY_CATCHED).length);

    const incPath = () => {
        return (currentPage >= maxPage) ? 1 : currentPage + 1;
    };
    const decPath = () => {
        return (currentPage <= 1) ? maxPage : currentPage - 1;
    };

    const NEXT_PAGE = `/${category}/page${incPath()}`;
    const PREV_PAGE = `/${category}/page${decPath()}`;

    const handleToNextClick = () => {
        setPageNumber(incPath())
    };

    const handleToPrevClick = () => {
        setPageNumber(decPath())
    };

    return (
        <nav className="app-pagination">
            <Link to={PREV_PAGE}>
                <button className="btn-link to-prev-poks"
                        onClick={handleToPrevClick}>prev</button>
            </Link>
            <span className="page-info">
                page <span className="page-number">{currentPage} </span>
                of <span className="page-number">{maxPage}</span>
            </span>
            <Link to={NEXT_PAGE}>
                <button className="btn-link to-next-poks"
                        onClick={handleToNextClick}>next</button>
            </Link>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPageNumber: data => dispatch(setPageNumber(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);