import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const UserProfileStampSC = styled.header`
  max-width: 22.75rem;

  margin: 0 auto;
  margin-top: 7rem;
  margin-bottom: 2.5rem;

  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: ${bp.tablet}) {
    margin-top: 2.5rem;
    flex-direction: column;
  }
`;

export const SectionSC = styled.section`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${bp.tablet}) {
    gap: 0.5rem;
  }
`;

export const ProfilePictureSC = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;

  @media (max-width: ${bp.tablet}) {
    margin: 0 auto;
  }
`;

export const UserNameSC = styled.h1`
  max-width: 12.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 1.5rem;
  color: #303133;
`;

export const UserCountrySC = styled.p`
  font-size: 1rem;
  color: #0b0c0d;
  opacity: 0.5;
`;

export const AddProjectButtonSC = styled.button`
  width: 12.5rem;
  height: 3rem;

  font-size: 1rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.38);

  border: none;
  border-radius: 4px;

  background: rgba(0, 0, 0, 0.12);
  box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: ${(props) => (props.$activated ? "pointer" : "not-allowed")};
  }

  &:active {
    ${(props) =>
      props.$activated &&
      "position: relative; top: 1px; left: 1px; box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.25);"}
  }
`;
