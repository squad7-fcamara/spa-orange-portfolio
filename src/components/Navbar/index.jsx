import { useEffect, useState } from "react";
import {
  NavbarSC,
  DesktopMenuSC,
  MobileDisplaySC,
  ProfileIconSC,
  MenuListSC,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { MdMenu, MdNotifications } from "react-icons/md";
import Logomarca from "../../assets/images/logomarca.png";
import toast, { Toaster } from "react-hot-toast";


function Navbar() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    sessionStorage.getItem("userId") !== null ? setAuth(true) : navigate("/");
  }, [navigate]);

  const notify = () => {
    toast("Funcionalidade em breve!!", {
      duration: 5000,

      style: {
        background: "#8a8a8a",

      },
    });
  }

  return (
    <>
      {auth && (
        <NavbarSC>

          <Toaster />
          <div>
            <MobileDisplaySC onClick={toggleDropdown}>
              <MdMenu size={"36px"} color="#FCFDFF" />
            </MobileDisplaySC>
            <MenuListSC $isOpen={isDropdownOpen}>
              <span>
                <li>
                  {" "}
                  <a href="/profile">Meus Projetos</a>
                </li>
              </span>
              <li>
                {" "}
                <a href="/community">Descobrir </a>
              </li>
              <li onClick={() => sessionStorage.removeItem("userId")}>
                {" "}
                <a href="/">Sair </a>
              </li>
            </MenuListSC>
            <img
              src={Logomarca}
              alt="logomarca do orange portfólio"
              className="logo"
            />
            <DesktopMenuSC>
              <li>
                {" "}
                <a href="/profile">Meus Projetos</a>
              </li>
              <li>
                {" "}
                <a href="/community">Descobrir </a>
              </li>
              <li onClick={() => sessionStorage.removeItem("userId")}>
                {" "}
                <a href="/">Sair </a>
              </li>
            </DesktopMenuSC>
          </div>
          <div>
            <ProfileIconSC
              src="/src/assets/images/profile-picture-default.svg"
              alt="ícone imagem de perfil"
            />
            <MdNotifications className="notificationIcon" onClick={() => notify()} size={"36px"} color="#FCFDFF" />
          </div>
        </NavbarSC>
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
