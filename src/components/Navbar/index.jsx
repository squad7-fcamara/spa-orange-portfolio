import {
  DesktopMenuSC,
  MobileDisplaySC,
  NavbarSC,
  ProfileIconSC,
} from "./style";
import { Outlet } from "react-router-dom";
import { MdMenu, MdNotifications } from "react-icons/md";
import Logomarca from "../../assets/images/logomarca.png";

function Navbar() {

  return (
    <>
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
            <li > <a href="/profile">Meus Projetos</a></li>
            <li > <a href="/community">Descobrir </a></li>
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
      <Outlet />
    </>
  );
}

export default Navbar;
