import { DesktopMenu, NavbarSC } from "./style";
import { Outlet } from "react-router-dom";
import { MdAccountCircle, MdMenu, MdNotifications } from "react-icons/md";
import Logomarca from "../../assets/images/logomarca.png";

function Navbar() {
  return (
    <>
      <NavbarSC>
        <div>
          <MdMenu size={"3.6rem"} />
          <img
            src={Logomarca}
            alt="logomarca do orange portfólio"
            className="logo"
          />
          <DesktopMenu>
            <li>Meus Projetos</li>
            <li>Descobrir</li>
          </DesktopMenu>
        </div>
        <div>
          <MdAccountCircle size={"4.8rem"} />
          <MdNotifications size={"3.6rem"} />
        </div>
      </NavbarSC>
      <Outlet />
    </>
  );
}

export default Navbar;
