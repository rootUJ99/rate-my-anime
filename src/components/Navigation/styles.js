import styled from 'styled-components';
export const GridWRapper = styled.div`
background: #89b8c2;
border-radius: 2rem;
display: flex;
flex-direction: column;
position: fixed;
top: 50%;
transform: translate(0,-50%);
z-index: 8;
@media (max-width: 640px) {
  flex-direction: row;
  bottom: 1rem;
  top: auto;
  left: 50%;
  transform: translate(-50%);
  height: 3.5rem;
}
`;

export const GridWrapWithColours = styled(GridWRapper)`
  background: #89b8c2;
  border-radius: 2rem;
`;


