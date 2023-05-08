import { createGlobalStyle } from 'styled-components';
import SpartanFont from './Fonts';

const GlobalStyle = createGlobalStyle`
  ${SpartanFont}
  body {
    font-family: 'League Spartan', sans-serif;
  }
`;

export default GlobalStyle;