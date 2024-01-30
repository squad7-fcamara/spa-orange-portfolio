import styled from "styled-components";

const laptop = "1024px";
const tablet = "768px";
const mobile = "425px";

export const ProjectCardSC = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  margin-top: 16px;
  

  .card-without-project-sc,
  span {
    max-height: 297px;
    min-height: 258px;
    height: 50vw;
    width: 49%;
    border-radius: 4px;
    margin-block: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: ${laptop}) {
    & {
      flex-wrap: wrap;
    }
    span {
      display: none;
    }
  }
  @media (max-width: ${tablet}) {
    .card-without-project-sc {
      width: 48%;
      margin-top: 0;
    }
  }
  @media (max-width: ${mobile}) {
    .card-without-project-sc {
      width: 100%;
      h1,
      p {
        width: 82%;
      }
    }
  }
`;

export const CardWithoutProjectSC = styled.div`
  position: relative;
  color: #303133;
  background-color: #e6e9f2;
  box-shadow: 1px 4px 4px rgba(230, 233, 242, 1);

  h1 {
    width: 270px;
    font-size: 16px;
    opacity: 0.6;
  }
  p {
    width: 270px;
    font-size: 14px;
    opacity: 0.6;
  }
`;

export const BlankCardSC = styled.span`
  background-color: #e6e9f233;
`;
