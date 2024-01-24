import styled from "styled-components";

export const NavbarSC = styled.nav`
  width: 100dvw;
  height: 7.3rem;
  padding: 1.6rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111133;
  box-shadow: 0 0.4rem 0.4rem rgba(17, 17, 51, 0.2);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    font-size: 2rem;
    color: #fcfdff;
  }
`;

export const DesktopMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
`;
