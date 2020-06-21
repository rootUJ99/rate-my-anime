import React from 'react';
import styled from 'styled-components';
const ButtonWrapper = styled.button`
  padding: 0.5rem 2rem;
  color: white;
  border: none;
  outline:none;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #9BE2D6 100%);
`;

const Button = ({children, ...props}) => (
  <ButtonWrapper {...props} >
    {children}
  </ButtonWrapper>
);

export default Button;