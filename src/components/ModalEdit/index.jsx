import { useState, useEffect, useRef } from "react";
import {
  DropdownBtn,
  DropdownIcon,
  DropDowndivOptions,
  DropdownCardEdit,
  DropdownCardEditOptions,
} from "./styledModalEdit";

const ModalEdit = ({ onOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <DropdownBtn onClick={toggleDropdown}>
        <DropdownIcon />
      </DropdownBtn>

      <DropDowndivOptions ref={dropdownRef} $isOpen={isDropdownOpen}>
        <DropdownCardEdit>
          <DropdownCardEditOptions onClick={onOpen}>Editar</DropdownCardEditOptions>
          <DropdownCardEditOptions>Excluir</DropdownCardEditOptions>
        </DropdownCardEdit>
      </DropDowndivOptions>
    </>
  );
};

export default ModalEdit;
