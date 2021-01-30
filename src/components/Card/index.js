import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  /* background: #f0f0f3; */
  padding: ${props => props.givePadd ? '1rem' : 0}; 
  border-radius: 0.7rem;
  width: ${props => props.width};
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 5%) 0px 9px 24px;
  border: 1px solid rgb(242, 242, 242);
  transition: box-shadow .3s;
  transition: transform .2s;
  ${ props => props.hover &&
    `:hover {
      box-shadow: rgb(0 0 0 / 10%) 0px 9px 24px;
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