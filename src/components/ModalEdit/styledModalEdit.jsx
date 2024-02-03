import { MdCreate } from "react-icons/md";
import styled from "styled-components";

export const DropdownBtn = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.38);
  width: 2.1rem;
  height: 2.1rem;
  cursor: pointer;

  transition: opacity 0.5s ease, background-color 0.5s ease;

  &:hover {
    background-color: rgba(255, 204, 153, 1);
  }

  @media (max-width: 768px) {
    opacity: 1;
    width: 2rem;
  }
  @media (max-width: 425px) {
    width: 2rem;
  }
`;

export const DropdownIcon = styled(MdCreate)`
  margin: auto;
  width: 1.39rem;
  height: 1.39rem;
  color: rgba(48, 49, 51, 1);
`;

export const DropDowndivOptions = styled.span`
  position: absolute;
  top: 55px;
  right: 16px;
  width: 208px;
  height: ${(props) => (props.$isOpen ? "118px" : "0px")};
  overflow: hidden;
  transition: height 0.5s ease;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  z-index: 2;
`;

export const DropdownCardEdit = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column; /* Empilha os itens verticalmente */
  align-items: center; /* Centraliza os itens na vertical */
`;

export const DropdownCardEditOptions = styled.li`
  padding: 12px 0px;
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alinha o texto à esquerda */
  align-items: center;
  gap: 8px;
  background: var(--Neutral-Colors-Neutral-60, #fcfdff);
  cursor: pointer;

  font-size: 16px;
  color: rgba(81, 82, 85, 1);
  transition: background-color 0.8s ease;
  padding-left: 16px;

  &:hover {
    background-color: rgba(255, 238, 204, 1);
  }
`;
