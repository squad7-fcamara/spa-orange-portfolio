import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const ContainerCardSC = styled.div`
  width: 33%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.12);

  .icon-pictures {
    margin: 0 auto;
  }

  .title,
  .paragraph {
    color: #303133;
    opacity: 0.6;

    margin: 0 14%;
  }

  .project-image,
  .icon-pictures,
  .title,
  .paragraph {
    display: none;
  }

  &.add-project {
    height: 16rem;
    background: #e6e9f2;

    .icon-pictures,
    .title,
    .paragraph {
      display: initial;
    }

    &:hover {
      cursor: ${(props) => (props.$activated ? "pointer" : "not-allowed")};
    }

    &:active {
      ${(props) =>
        props.$activated &&
        "position: relative; top: 1px; left: 1px; box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.12);"}
    }

    @media (max-width: ${bp.tablet}) {
      height: calc((100vw - 1.5rem) * 9 / 16);
    }
  }

  &.with-project {
    .project-image {
      display: initial;
    }

    &:hover {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.03);
    }
  }

  &.blank {
    height: 16rem;
    background: rgba(230, 233, 242, 0.2);
    box-shadow: none;

    @media (max-width: ${bp.tablet}) {
      height: calc((100vw - 1.5rem) * 9 / 16);
    }
  }

  @media (max-width: ${bp.laptop}) {
    width: 50%;
  }
  @media (max-width: ${bp.tablet}) {
    width: 100%;
  }
`;

export const CardSC = styled.div``;

export const ProjectImageSC = styled.img`
  width: 100%;
  height: 16rem;
  border-radius: 0.25rem;

  @media (max-width: ${bp.tablet}) {
    height: calc((100vw - 1.5rem) * 9 / 16);
  }
`;
