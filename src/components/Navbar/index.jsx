import { DesktopMenuSC, MobileDisplaySC, NavbarSC } from "./style";
import { Outlet } from "react-router-dom";
import { MdAccountCircle, MdMenu, MdNotifications } from "react-icons/md";
import Logomarca from "../../assets/images/logomarca.png";

function Navbar() {
  return (
    <>
      <NavbarSC>
        <div>
          <MobileDisplaySC>
            <MdMenu size={"3.6rem"} />
          </MobileDisplaySC>
          <img
            src={Logomarca}
            alt="logomarca do orange portfólio"
            className="logo"
          />
          <DesktopMenuSC>
            <li>Meus Projetos</li>
            <li>Descobrir</li>
          </DesktopMenuSC>
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
