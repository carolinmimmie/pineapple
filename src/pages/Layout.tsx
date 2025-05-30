import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";
import "./../styles/layout.scss";

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
