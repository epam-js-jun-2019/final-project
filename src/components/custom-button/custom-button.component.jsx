import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({ children, addClass, ...otherProps }) => (
  <button {...otherProps} className={`custom-button ${addClass}`}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired || PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default CustomButton;
