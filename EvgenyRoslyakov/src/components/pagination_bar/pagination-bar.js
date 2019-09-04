import React from 'react';
import './pagination-bar.css';

const PaginationBar = (props) => {
    return (
        <nav className="app-pagination">
            <button className="btn-link to-prev-poks"
                    onClick={props.toPrev}>prev</button>
            <span className="page-info">
                page <span className="page-number">
                         {props.pageInfo[0]}
                     </span> of <span className="page-number">
                         {props.pageInfo[1]}
                     </span>
            </span>
            <button className="btn-link to-next-poks"
                    onClick={props.toNext}>next</button>
        </nav>
    )
}

export default PaginationBar;