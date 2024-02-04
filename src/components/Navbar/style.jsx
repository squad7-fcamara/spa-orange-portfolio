import styled from "styled-components";

const mobile = "768px";

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
  width: 100%;
  height: 73px;
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: #111133;
  border-bottom: 1px solid #111133;
  box-shadow: 0 4px 4px rgba(17, 17, 51, 0.2);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    font-size: 20px;
    color: #fcfdff;
  }

  @media (max-width: ${mobile}) {
    padding: 24px;
    div {
      gap: 16px;
    }
  }
`;

export const DesktopMenuSC = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;

  @media (max-width: ${mobile}) {
    & {
      display: none;
    }
  }
  & > li > a {
    font-weight: 300;
    color: white;
    text-decoration: none;
  }
`;

export const ProfileIconSC = styled.img`
  width: 40px;
`;
