import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --background-light: #F6F6F6;
  --background-dark: #2a2828;
  --label-light: #2a2828;
  --label-dark: #F6F6F6;
}

 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
body {
  /* font-family: 'Noto Sans KR', sans-serif; */
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(1rem, 1vw, 2rem); 
  margin: 0;
  background: var(--background-light);
}
`;

export default GlobalStyles;