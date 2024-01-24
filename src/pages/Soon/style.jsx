import styled from "styled-components";

export const SoonSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100dvh;

  color: rgba(255, 255, 255, 0.871);
  background-color: #242424;

  h1 {
    font-size: 3.2em;
    line-height: 2;
  }

  p {
    line-height: 1.5;
  }

  .logo {
    height: 10em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #ffaa66);
  }

  .go-the-repositories {
    color: #888;
  }
`;
