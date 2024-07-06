import NavBar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Nav;
