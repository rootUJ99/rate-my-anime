import React from 'react'
import styled from 'styled-components';
import Logo from '../Logo';
const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  margin-bottom: 5rem;
  width: 100%;
`;
const Header = () => {
    return (
        <Wrapper>
          <Logo/>
        </Wrapper>
    )
}

export default Header;