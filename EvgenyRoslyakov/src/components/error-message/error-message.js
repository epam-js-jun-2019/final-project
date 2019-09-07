import React from 'react';
import './error-message.css';
import logo from './error-logo.png';

const ErrorMessage = () => {
    return (
        <div className="error-message">
            <img src={logo}
                 className="error-logo"
                 alt="error-logo" />
            <h2>Oops!</h2>
            <h2>Something went wrong!</h2>
        </div>
    )
}

export default ErrorMessage;