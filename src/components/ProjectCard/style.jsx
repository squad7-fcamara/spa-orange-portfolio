import styled from "styled-components";

const laptop = "1280px";
const tablet = "1024px";
const mobile = "768px";

export const ProjectCardSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 23px;
  margin-top: 16px;

  div {
    width: 390px;
    height: 258px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-block: 40px;
    gap: 16px;
    border-radius: 4px;
    transition: transform 0.3s ease;
  }

  .icon {
    margin: 0 auto;
  }

  h1,
  p {
    margin: 0 48px;
    opacity: 0.6;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: ${laptop}) {
    & {
      flex-wrap: wrap;
    }
    div {
      width: 30%;
      height: 200px;
    }
    .blank-card:last-child {
      display: none;
    }
  }
  @media (max-width: ${tablet}) {
    div {
      width: 48%;
      height: 258px;
    }
  }
  @media (max-width: ${mobile}) {
    .blank-card {
      display: none;
    }
    div {
      width: 100%;
      height: 300px;
      h1,
      p {
        margin: 0 24px;
      }
    }
  }
  @media (max-width: ${"375px"}) {
    div {
      height: 220px;
    }
  }
  @media (max-width: ${"320px"}) {
    div {
      height: 200px;
    }
  }
`;

export const Card = styled.div`
  &.card-without-project {
    color: #303133;
    background-color: #e6e9f2;
    box-shadow: 1px 4px 4px rgba(230, 233, 242, 1);
    img {
      display: none;
    }
  }

  &.card-with-project {
    background-image: url(${(props) => props.imageProject});
    background-size: cover;

    img {
      border-radius: 4px;
    }

    footer {
      width: 100%;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      margin-top: 315px;
    }

    footer h1 {
      color: #515255;
      opacity: 1;
      margin: 0 16px;
    }

    footer img {
      width: 24px;
      height: 24px;
    }
    footer span {
      display: flex;
      align-items: center;
    }
    .tag {
      width: fit-content;
      height: 24px;
      font-family: 13px;
      color: #000000de;
      text-align: center;
      padding: 12px;
      border-radius: 100px;
      background-color: #00000014;
    }
    @media (max-width: ${laptop}) {
      footer {
        margin-top: 250px;
      }
    }
    @media (max-width: ${tablet}) {
      footer {
        margin-top: 315px;
      }
    }
    @media (max-width: ${mobile}) {
      footer {
        margin-top: 350px;
      }
    }
    @media (max-width: "375px") {
      footer {
        margin-top: 0px;
      }
    }
  }

  &.card-without-project:hover,
  &.card-with-project:hover {
    cursor: pointer;
    transform: translate(-3px, -6px);
  }

  &.blank-card {
    background-color: #e6e9f233;

    h1,
    p,
    img,
    .icon {
      display: none;
    }
  }
`;
