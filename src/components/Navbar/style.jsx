import styled from "styled-components";

export const NavbarSC = styled.nav`
  width: 100dvw;
  height: 73px;
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111133;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    font-size: 20px;
    color: #fcfdff;
  }

  img {
    height: 100%;
  }
`;

export const DesktopMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
`;
