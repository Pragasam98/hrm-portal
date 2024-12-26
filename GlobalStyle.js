import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #root {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
