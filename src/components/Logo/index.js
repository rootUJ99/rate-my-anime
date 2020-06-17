import React from 'react'
import styled from 'styled-components';
const LogoImage = styled.img`
  width: 7%;
  margin-top: 10px;
  filter: drop-shadow(0 0 0.5rem #94D2EC);
`;
const Logo = () => {
    return (
            <LogoImage src="ratefox.svg" />
        // <div>
        // </div>
    )
}

export default Logo;