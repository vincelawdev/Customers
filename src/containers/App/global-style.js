/* eslint-disable global-require */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: block;
    background-color: white;    
    background-image: url(${require('./assets/images/beach.jpg')});
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
`;

export default GlobalStyle;
