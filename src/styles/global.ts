import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #EFE9F4;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: 'Roboto';
  }

  body, button, a {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }


`;

export default GlobalStyles;
