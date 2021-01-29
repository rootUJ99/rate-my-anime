import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  background: #f0f0f3;
  padding: ${props => props.givePadd ? '1rem' : 0}; 
  border-radius: 0.7rem;
  width: ${props => props.width};
  box-sizing: border-box;
  /* box-shadow: -16px -20px 53px -19px rgba(0,0,0,0.36); */
  box-shadow:  -9px 11px 79px -2px rgba(0,0,0,0.18);
  transition: box-shadow .3s;
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