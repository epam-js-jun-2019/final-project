import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({ children, onClick }) => (
  <button onClick={onClick} className='custom-button'>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired || PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CustomButton;
