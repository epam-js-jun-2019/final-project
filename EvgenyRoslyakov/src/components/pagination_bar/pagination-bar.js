import React from 'react';
import { Link } from 'react-router-dom';
import './pagination-bar.css';

const PaginationBar = (props) => {
    const curPage = props.pageInfo[0];
    const maxPage = props.pageInfo[1];
    const incPath = () => {
        return (curPage >= maxPage) ?
                1 :
                curPage + 1;
    };
    const decPath = () => {
        return (curPage <= 1) ?
                maxPage :
                curPage - 1;
    };
    return (
        <nav className="app-pagination">
            <Link to={`${props.category}/page${decPath()}`}>
                <button className="btn-link to-prev-poks"
                        onClick={props.toPrev}>prev</button>
            </Link>
            <span className="page-info">
                page <span className="page-number">
                         {curPage}
                     </span> of <span className="page-number">
                         {maxPage}
                     </span>
            </span>
            <Link to={`${props.category}/page${incPath()}`}>
                <button className="btn-link to-next-poks"
                        onClick={props.toNext}>next</button>
            </Link>
        </nav>
    )
}

export default PaginationBar;