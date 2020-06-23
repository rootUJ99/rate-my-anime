import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  background: #F6F6F6;
  padding: 1rem;
  border-radius: 0.5rem;
  width: ${props => props.width};
  box-shadow: -16px -20px 53px -19px rgba(0,0,0,0.36);
  :hover {
    background: ${props=> props.hover && 'black'};
    /* width: ${props => `calc(${props.width} + 10%)` } */
  }
`;
const Card = ({children, width, ...rest})=> {
  return (
    <Container width={width} {...rest}>
      {children}
    </Container>
  )
}
export default Card;