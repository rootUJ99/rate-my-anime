import styled from 'styled-components';
export const Navigator = styled.div`
background-image: linear-gradient(62deg, #8EC5FC 0%, rgb(155, 226, 214) 100%);
border-radius: 1.4rem;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
padding: 2rem 1rem;
top: 50%;
transform: translate(0,-50%);
left: 1.5rem;
z-index: 8;
box-shadow: -16px -20px 53px -19px rgba(0,0,0,0.36);
@media (max-width: 640px) {
  flex-direction: row;
  bottom: 1rem;
  top: auto;
  left: 50%;
  transform: translate(-50%);
  height: 3.5rem;
  align-items: center;
  width: 50%;
  justify-content: space-around;
}
`;

export const NavItem = styled.button`
  /* padding: 0.5rem; */
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.7rem;
  font-weight: bold;
  color: #2c6a37;
  :hover {
    color: white;
    transition: color 0.5s ease;
  }
`;


