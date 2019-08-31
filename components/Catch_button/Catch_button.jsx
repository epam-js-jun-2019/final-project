import './Catch_button.scss';

import React, { Component } from 'react';

export function Catch_button(props){
    const {onClick, disable, text} = props;

    return(
        <button className="catch_button" onClick={onClick} disabled={disable}> {text} </button>
    )
}