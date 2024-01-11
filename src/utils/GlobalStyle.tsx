import { createGlobalStyle } from 'styled-components';
import { LLigat } from '../assets';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PortLligat';
    src: url(${LLigat});
    font-weight:normal;
    font-style:normal;
  }

  /* body {
    font-family: 'PortLligat' !important;
  } */
`;

export default GlobalStyle;