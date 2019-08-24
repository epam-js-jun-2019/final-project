import React from 'react';

import './pagination.styles.scss';

const Pagination = ({
  pokemonsPerPage,
  currentPage,
  totalPokemons,
  paginate
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      {pageNumbers.map(number => (
        <div key={number}>
          <a
            className={`${
              number === currentPage
                ? 'pagination__page-pointer pagination__page-pointer_active'
                : 'pagination__page-pointer'
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Pagination;
