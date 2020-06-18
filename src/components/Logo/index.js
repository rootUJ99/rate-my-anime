import React from 'react'
import styled from 'styled-components';
const LogoImage = styled.img`
  width: 15vh;
  margin-top: 10px;
  /* filter: drop-shadow(0 0 0.5rem #94D2EC); */
  filter: drop-shadow(-16px -20px 53px -19px rgba(0,0,0,0.36));
`;
const Logo = () => {
    return (
            <LogoImage src="ratefox.svg" />
        // <div>
        // </div>
    )
}

export default Logo;