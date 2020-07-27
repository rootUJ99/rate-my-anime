import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  background: #f0f0f3;
  padding: 1rem;
  border-radius: 0.5rem;
  width: ${props => props.width};
  /* box-shadow: -16px -20px 53px -19px rgba(0,0,0,0.36); */
  box-shadow:  -9px 11px 79px -2px rgba(0,0,0,0.18);
  transition: transform .2s;
  ${ props => props.hover &&
    `:hover {
        transform: scale(1.1);
        background: #f6f6f6;
    }`
  }
  @media (max-width: 640px){
    width: ${props => props.sWidth || 'inherit'};
  }
`;
const Card = ({children, width, sWidth, ...rest})=> {
  return (
    <Container width={width} sWidth={sWidth}{...rest}>
      {children}
    </Container>
  )
}
export default Card;