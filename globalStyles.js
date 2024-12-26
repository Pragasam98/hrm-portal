import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset some basic styles for consistency across browsers */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8;
    color: #333;
    line-height: 1.6;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center; /* Centers content horizontally */
  }

  .app-wrapper {
    max-width: 1440px; /* Set max width */
    width: 100%;
    margin: 0 auto; /* Centers the content horizontally */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
