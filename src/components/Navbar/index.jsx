import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <p>Eu sou a barra de navegação</p>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
