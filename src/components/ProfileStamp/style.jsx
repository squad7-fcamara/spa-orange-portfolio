import styled from "styled-components";

const breakpoint = "768px";

export const ProfileStampSC = styled.div`
  max-width: 364px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 112px;
  margin-bottom: 40px;

  img {
    width: 122px;
    margin-right: 42px;
  }
  div {
    min-height: 122px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1 {
    font-size: 24px;
    color: #303133;
  }
  p {
    font-size: 16px;
    color: #0b0c0d;
    opacity: 0.5;
  }
  button {
    width: 200px;
    height: 42px;
    font-size: 15px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.38);
    border: none;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.12);
  }

  @media (max-width: ${breakpoint}) {
    & {
      flex-direction: column;
      margin: 56px auto 24px;

      img {
        margin: 0 auto 16px;
      }
    }
  }
`;
