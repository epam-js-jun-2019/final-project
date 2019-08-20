import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, onClick }) => (
  <button onClick={onClick} className='custom-button'>
    {children}
  </button>
);

export default CustomButton;
