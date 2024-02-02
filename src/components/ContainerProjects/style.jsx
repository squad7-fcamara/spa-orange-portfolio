import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const ContainerProjectSC = styled.div`
  width: 100%;

  padding-top: 2.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: ${bp.tablet}) {
    padding-top: 1.5rem;

    flex-direction: column;
  }
`;
