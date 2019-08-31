import React from 'react';

export function Capture_date_view(props){
    var { capture_date }=props;
    return(
        <span>
            Ты поймал его {capture_date}!
        </span>
    )
}