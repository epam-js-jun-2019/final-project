import React from 'react';

export function CaptureDateView(props){
    var { capture_date }=props;
    return(
        <span>
            Ты поймал его {capture_date}!
        </span>
    )
}