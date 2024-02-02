import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const ContainerCardSC = styled.div`
  position: relative;
  width: 32%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 0.25rem;

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
  .paragraph,
  .header,
  .footer {
    display: none;
  }

  &.add-project {
    height: 16rem;
    gap: 1rem;

    background-color: #e6e9f2;
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.12);

    .icon-pictures,
    .title,
    .paragraph {
      display: inherit;
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
    height: 18rem;

    .project-image,
    .header,
    .footer {
      display: inherit;
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

  @media (max-width: 1280px) {
    width: 48%;
  }
  @media (max-width: ${bp.tablet}) {
    width: 100%;
  }
`;

export const EditBtnSpaceSC = styled.header`
  width: 100%;
  height: 2.75rem;

  padding-right: 1rem;

  position: absolute;
  top: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ProjectImageSC = styled.img`
  width: 100%;
  height: 16rem;

  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.12);

  object-fit: cover;
  object-position: center;

  @media (max-width: ${bp.tablet}) {
    height: calc((100vw - 1.5rem) * 9 / 16);
  }
`;

export const ProjectOwnerInfosSC = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  .user-picture {
    width: 1.5rem;
    height: 1.5rem;
  }

  .informative-text {
    height: 2.5rem;
    font-size: 1rem;
    color: #515255;

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  @media (max-width: ${bp.laptop}) {
    .user-picture {
      width: 2.5rem;
      height: 2.5rem;
    }

    .informative-text {
      height: 3.5rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .user-name {
      color: #303133;
    }

    .dot {
      display: none;
    }
  }
`;
