import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;

    color: #222244;
    background-color: #FCFDFF;
  }
`;
