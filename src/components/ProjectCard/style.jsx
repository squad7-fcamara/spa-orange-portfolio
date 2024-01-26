import styled from "styled-components";

const laptop = "1024px";
const tablet = "768px";
const mobile = "425px";

export const ProjectCards = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: space-between;
  margin-top: 1.6rem;

  div {
    max-height: 29.7rem;
    min-height: 25.8rem;
    height: 50vw;
    width: 49%;
    border-radius: 0.4rem;
    margin-block: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 1.6rem;
  }

  @media (max-width: ${laptop}) {
    & {
      flex-wrap: wrap;
    }
  }
  @media (max-width: ${tablet}) {
    div {
      width: 48%;
      margin-top: 0;
    }
  }
  @media (max-width: ${mobile}) {
    div {
      width: 100%;
      h1,
      p {
        width: 82%;
      }
    }
  }
`;

export const CardWithoutProjectSC = styled.div`
  color: #303133;
  background-color: #e6e9f2;
  box-shadow: 0.1rem 0.4rem 0.4rem rgba(129, 131, 136, 0.2);

  h1 {
    width: 27rem;
    font-size: 1.6rem;
  }
  p {
    width: 27rem;
    font-size: 1.4rem;
  }
`;

export const BlankCardSC = styled.div`
  background-color: #e6e9f233;
`;
