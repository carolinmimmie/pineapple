import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Pineapple" },
  { path: "/menu", label: "Meny" },
  { path: "/about", label: "Öppettider" },
  { path: "/bookings", label: "Boka bord" },
  { path: "/contact", label: "Kontakt" },
];

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-items-insta">
        <FaInstagram />
      </div>
    </div>
  );
};

export default NavItems;
