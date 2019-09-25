import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';
import routes from '../../routes/routes';
import { INDEX_PAGE_NUM, CATEGORY_ALL, CATEGORY_CATCHED } from '../../constants/constants';
import './AppHeader.css';
import icon from '../../assets/img/header-icon.png';

const AppHeader = ({ setCategory, setPageNumber }) => {
    const handleToggleCategory = (category) => {
        setCategory(category);
        setPageNumber(INDEX_PAGE_NUM);
    };

    return (
        <nav className="app-header pokedex-header">
            <Link to={routes.INDEX}>
                <img className="logo"
                     src={icon}
                     onClick={() => handleToggleCategory(CATEGORY_ALL)}
                     alt="logo" />
            </Link>
            <Link to={routes.CATCHED_PAGE_1}>
                <button className="btn-link to-catched-poks"
                        onClick={() => handleToggleCategory(CATEGORY_CATCHED)}>
                    catched
                </button>
            </Link>
        </nav>
    );
};

const mapDispatchToProps = (dispatch) => {
    const { setCategory,
            setPageNumber } = bindActionCreators(actions, dispatch);
    return {
        setCategory,
        setPageNumber
    };
};

export default connect(null, mapDispatchToProps)(AppHeader);