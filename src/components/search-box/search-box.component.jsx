import React from 'react';
import PropTypes from 'prop-types';

import './search-box.styles.scss';

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchBox;
