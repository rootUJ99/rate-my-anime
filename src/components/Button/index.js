import React from 'react';
import styled from 'styled-components';

import './styles.css';

const Button = ({children, ...props}) => (
  <button {...props} className="btn">
    {children}
  </button>
);

export default Button;