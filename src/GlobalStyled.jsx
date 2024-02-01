import { createGlobalStyle, styled } from "styled-components";

const tablet = "1024px";
const mobile = "768px";

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
  max-width: 1280px;
  width: 100%;
  min-height: calc(100dvh - 73px);
  padding: 0 32px 0;
  margin: 73px auto 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  header {
    width: 100%;
    height: 122px;
    font-size: 34px;
    text-align: center;
    margin: 64px 0 0;
  }

  @media (max-width: ${tablet}) {
    & {
      padding: 0 24px;
    }
    & > header {
      font-size: 24px;
    }
  }
  @media (max-width: ${mobile}) {
    & {
      padding: 0 12px;
    }
    & > header {
      font-size: 16px;
    }
  }
`;
