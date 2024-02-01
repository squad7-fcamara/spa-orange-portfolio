import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const DashboardSC = styled.main`
  max-width: 1280px;
  min-height: 100dvh;
  margin: 0 auto;
  padding-top: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${bp.desktop}) {
    padding-inline: 2rem;
  }
  @media (max-width: ${bp.mobile}) {
    padding-inline: 1.5rem;
  }
`;
