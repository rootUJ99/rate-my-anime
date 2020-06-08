import React from 'react';
import Routes from './routes';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const ClipPathParent = styled.div`
  height: 100vh;
  margin: 0;
`;

const ClipPath = styled.div`
  background:  #9BE2D6;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  margin: 0;
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 45%);
  z-index: -1; 
  @media (max-width: 640px){
    clip-path: polygon(0 0, 100% 0, 100% 14%, 0 28%);
  }
`;

const App = ()=> {
  return (
      <>
      <GlobalStyles/>
      <ClipPathParent>
        <ClipPath/>
          <img src="ratefox.svg" style={{
            width:'5%%',
            height:'10%',
            margin:'auto auto',
          }}/>
          <Routes/>
      </ClipPathParent>
      </>
  );
}

export default App;
