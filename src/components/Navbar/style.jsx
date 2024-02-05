import styled from "styled-components";

const mobile = "768px";

export const MobileDisplaySC = styled.div`
  :only-child {
    display: none;
    cursor: pointer;
  }
  :active {
    scale: 95%;
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

export const MenuListSC = styled.ul`
  width: fit-content;
  height: 9rem;
  background-color: #fcfdff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;
  background: #fcfdff;
  padding-inline: 1.25rem;
  position: fixed;
  top: 4rem;
  left: 1.5rem;
  float: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1.5rem;
  display: ${(props) => (props.$isOpen ? "inherit" : "none")};

  & a {
    width: 100%;
    height: 2rem;
    text-decoration: none;
    color: #222244;
  }
`;
