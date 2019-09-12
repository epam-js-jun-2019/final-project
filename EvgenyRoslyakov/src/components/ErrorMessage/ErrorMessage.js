import React from 'react';
import './ErrorMessage.css';
import icon from './error-icon.png';

const ErrorMessage = () => {

    return (
        <div className="error-message">
            <img src={icon}
                 className="error-logo"
                 alt="error-logo" />
            <h2>Oops!</h2>
            <h2>Something went wrong!</h2>
        </div>
    )
}

export default ErrorMessage;