import styled from "styled-components";

const breakpoint = "768px";

export const ProfileStampSC = styled.div`
  max-width: 36.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  img {
    width: 12.2rem;
    margin-right: 4.2rem;
  }
  div {
    min-height: 12.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1 {
    font-size: 2.4rem;
    color: #303133;
  }
  p {
    font-size: 1.6rem;
    color: #0b0c0d;
  }
  button {
    width: 20rem;
    height: 4.2rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #00000061;
    border: none;
    border-radius: 0.4rem;
    background: #0000001e;
  }

  @media (max-width: ${breakpoint}) {
    & {
      flex-direction: column;

      img {
        margin: 0 auto 1.6rem;
      }
    }
  }
`;
