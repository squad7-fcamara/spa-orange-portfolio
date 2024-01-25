import styled from "styled-components";

const breakpoint = "1024px";

export const ProjectCards = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  justify-content: space-around;
  
  div {
    height: 25.8rem;
    min-width: 35.8rem;
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

  @media (max-width: ${breakpoint}) {
    & {
      flex-wrap: wrap;
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
