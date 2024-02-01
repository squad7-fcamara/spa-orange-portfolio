import "../../reset.css";
import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const DashboardSC = styled.main`
  max-width: 80rem;
  min-height: 100dvh;
  
  margin: 0rem auto;
  padding: 4.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${bp.mobile}) {
    padding-inline: 1.5rem;
  }
`;
