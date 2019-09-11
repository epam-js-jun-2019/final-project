import './CatchButton.scss';

import React from 'react';

export function CatchButton(props){
    const {onClick, disable, text} = props;

    return(
        <button className="catch_button" onClick={onClick} disabled={disable}> {text} </button>
    )
}