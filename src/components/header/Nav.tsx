import { RxHamburgerMenu } from "react-icons/rx";
import MenuItems from "./NavItems";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import HamburgerModal from "./HamburgerModal";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__mobile-group">
        <div className="nav__hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu />
        </div>
        <div className="nav__logo">
          <h1>
            <NavLink to={"/"}>Pineapple</NavLink>
          </h1>
        </div>
        <div className="nav__insta">
          <FaInstagram />
        </div>
      </div>

      <div className="nav__menu-items">
        <MenuItems />
      </div>
      <div className="nav__hamburger-modal">{isOpen && <HamburgerModal />}</div>
    </nav>
  );
};

export default Nav;
