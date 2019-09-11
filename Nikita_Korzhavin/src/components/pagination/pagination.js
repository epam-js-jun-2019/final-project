import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemonsIfNeeded } from '../../actions/requestDbActions.js';
import setPageType from '../../utils/setPageType'
import { setPage } from '../../actions/pagination';


function generatePageRange(currentPage, pageCount) {
  let delta = 2,
      left = currentPage - delta,
      right = currentPage + delta + 1,
      result = [];

  result = Array.from({length: pageCount}, (v, k) => k + 1)
      .filter(i => i && i >= left && i < right);

  result = ['previous', ...result, 'next']
  return result;
}

const Pagination = ({ currentPage, lastPage, dispatch, pageType }) => {
  const pages = generatePageRange(currentPage, lastPage);
  const onClick = (page) => (e) => {
    e.preventDefault();
    let neededPage;
    
    if (page === "previous") {
      neededPage = currentPage !== 1 ? currentPage - 1 : currentPage
    } else if (page === "next") {
      neededPage = currentPage !== lastPage ? currentPage + 1 : currentPage
    } else {
      neededPage = page
    }

    dispatch(fetchPokemonsIfNeeded(neededPage, pageType));
    dispatch(setPage(neededPage, pageType ));
  }
  return (
        <nav>
          <ul className="pagination justify-content-center m-4 ">
            {
              pages.map(
                page => 
                  (<li className={`shadow page-item ${page === currentPage ? "active": ""}`} key={ page } >
                    <Link to='' className={`page-link  text-light bg-dark`} onClick={onClick(page)}>
                      { page }
                    </Link>
                  </li>)
              )
            }
          </ul>
        </nav> 
        )
}

function mapStateToProps( state, {match: {path}} ) {
  const pageType = setPageType(path);
  const { pagination } = state;
  const lastPage = pagination[pageType].lastPage || 1;
  const currentPage = pagination[pageType].currentPage || 1;
  return {
    lastPage, 
    currentPage,
    pageType
  }
}

export default withRouter(connect(mapStateToProps)(Pagination));

