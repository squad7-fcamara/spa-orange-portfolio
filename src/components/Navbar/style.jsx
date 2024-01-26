import styled from "styled-components";

const mobile = "425px";

export const MobileDisplaySC = styled.div`
  :only-child {
    display: none;
  }
  @media (max-width: ${mobile}) {
    :only-child {
      display: initial;
    }
  }
`;

export const NavbarSC = styled.nav`
  width: 100dvw;
  height: 7.3rem;
  padding: 1.6rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: #111133;
  border-bottom: 1px solid #111133;
  box-shadow: 0 0.4rem 0.4rem rgba(17, 17, 51, 0.2);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    font-size: 2rem;
    color: #fcfdff;
  }

  @media (max-width: ${mobile}) {
    padding: 1.6rem;
    div {
      gap: 1.6rem;
    }
  }
`;

export const DesktopMenuSC = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;

  @media (max-width: ${mobile}) {
    & {
      display: none;
    }
  }
`;
