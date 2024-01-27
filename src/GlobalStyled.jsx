import { createGlobalStyle, styled } from "styled-components";

const tablet = "768px";

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

export const Dashboard = styled.div`
  max-width: 1536px;
  width: 100%;
  min-height: calc(100dvh - 73px);
  padding: 0 32px 80px;
  margin: 73px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: ${tablet}) {
    & {
      padding: 0 24px;
    }
  }
`;
