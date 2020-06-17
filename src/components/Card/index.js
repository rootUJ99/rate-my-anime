import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  background: #F6F6F6;
  padding: 1rem;
  border-radius: 0.5rem;
  width: ${props => props.width}

`;
const Card = ({children, width})=> {
  return (
    <Container width={width}>
      {children}
    </Container>
  )
}
export default Card;