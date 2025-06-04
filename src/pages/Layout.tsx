import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";
import "./../styles/layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="side-nav">
        <Nav />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
