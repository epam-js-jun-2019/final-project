import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import routes from '../../routes/routes';
import * as actions from '../../store/actions';
import './AppHeader.css';
import icon from './header-icon.png';

const AppHeader = (props) => {
    const { setCategory, setPageNumber } = props;

    const handleToggleCategory = (category) => {
        setCategory(category);
        setPageNumber(1);
    };

    return (
        <nav className="app-header pokedex-header">
            <Link to={routes.INDEX}>
                <img className="logo"
                     src={icon}
                     onClick={() => handleToggleCategory('all')}
                     alt="logo" />
            </Link>
            <Link to={routes.CATCHED_PAGE_1}>
                <button className="btn-link to-catched-poks"
                        onClick={() => handleToggleCategory('catched')}>
                    catched
                </button>
            </Link>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    const { setCategory,
            setPageNumber } = bindActionCreators(actions, dispatch)
    return {
        setCategory,
        setPageNumber
    }
}

export default connect(null, mapDispatchToProps)(AppHeader);