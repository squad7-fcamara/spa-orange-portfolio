import styled from "styled-components";
import { bp } from "../../utils/breakpoints";

export const CommunityHeaderSC = styled.header`
  max-width: 46.5rem;
  margin: 3rem;
`;

export const HeadlineSC = styled.p`
  font-size: 2.125rem;
  text-align: center;

  @media (max-width: ${bp.tablet}) {
    max-width: 100%;
    font-size: 24px;
  }
`;
