import React, { useEffect, useState } from "react";
import {
  NavbarSC,
  DesktopMenuSC,
  MobileDisplaySC,
  ProfileIconSC,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { MdMenu, MdNotifications } from "react-icons/md";
import Logomarca from "../../assets/images/logomarca.png";

function Navbar() {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.getItem("userId") !== null ? setAuth(true) : navigate("/");
  }, [navigate]);

  return (
    <>
      {auth && (
        <NavbarSC>
          <div>
            <MobileDisplaySC>
              <MdMenu size={"36px"} color="#FCFDFF" />
            </MobileDisplaySC>
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
            </DesktopMenuSC>
          </div>
          <div>
            <ProfileIconSC
              src="/src/assets/images/profile-picture-default.svg"
              alt="ícone imagem de perfil"
            />
            <MdNotifications size={"36px"} color="#FCFDFF" />
          </div>
        </NavbarSC>
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
