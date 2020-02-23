import React from 'react';
import styled from 'styled-components';
import Routes from './routes';
import Navigation from './components/Navigation';
const GridWRapper = styled.div`
  display: grid;
  grid-template-columns: 5% 90%;
  grid-gap: 1rem;
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
  }
`;
const App = ()=> {
  return (
    <GridWRapper>
      <Navigation/>
      <Routes/>
    </GridWRapper>
  );
}

export default App;
