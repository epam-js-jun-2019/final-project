import React from 'react';
// import logo from '../error-logo.png';

const EmptyMessage = () => {
    return (
        <div className="error-message">
            <img src='error-logo.png'
                 className="error-logo"
                 alt="error-logo" />
            <h2>Oops!</h2>
            <h2>You haven't catch anything yet!</h2>
        </div>
    )
}

export default EmptyMessage;