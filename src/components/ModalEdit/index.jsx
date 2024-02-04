import { useState } from "react";
import {
  DropdownBtn,
  DropdownIcon,
  DropDowndivOptions,
  DropdownCardEdit,
  DropdownCardEditOptions,
} from "./styledModalEdit";

const ModalEdit = ( { onOpen, onExclude } ) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // EfeitoDropdown / ainda falta efeito de abrir o card, mas isso faço depois
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <DropdownBtn onClick={toggleDropdown}>
        <DropdownIcon />
      </DropdownBtn>

      <DropDowndivOptions $isOpen={isDropdownOpen}>
        <DropdownCardEdit>
          <DropdownCardEditOptions onClick={onOpen} >Editar</DropdownCardEditOptions>
          <DropdownCardEditOptions onClick={ onExclude } >Excluir</DropdownCardEditOptions>
        </DropdownCardEdit>
      </DropDowndivOptions>
    </>
  );
};

export default ModalEdit;
