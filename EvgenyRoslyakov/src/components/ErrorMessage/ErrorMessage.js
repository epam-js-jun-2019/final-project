import React from 'react';
import { connect } from 'react-redux';
import './ErrorMessage.css';
import icon from '../../assets/img/error-icon.png';

const ErrorMessage = ({ error }) => {

    return (
        <div className="error-message">
            <img src={icon}
                 className="error-logo"
                 alt="error-logo" />
            <h2>Oops!</h2>
            <h2>Something went wrong!</h2>
            <h2>{error}</h2>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

export default connect(mapStateToProps)(ErrorMessage);