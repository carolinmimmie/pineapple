import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/pineapple", label: "Pineapple" },
  { path: "/meny", label: "Meny" },
  { path: "/oppet-tider", label: "Öppettider" },
  { path: "/boka-bord", label: "Boka bord" },
  { path: "/hitta-hit", label: "Hitta hit" },
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
