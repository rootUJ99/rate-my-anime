import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
  background: #F6F6F6;
  padding: 1rem;
  border-radius: 0.5rem;
`;
const Card = ({children})=> {
  return (
    <Container>
      {children}
    </Container>
  )
}
export default Card;