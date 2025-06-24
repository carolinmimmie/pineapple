import MenuItems from "../components/MenuItems";
import { menuData } from "../data/menuData";

const Menu = () => {
  const foodMenus = menuData.filter((menu) => menu.type === "food");
  const drinkMenus = menuData.filter((menu) => menu.type === "drink");
  return (
    <div className="menu">
      <h2>Mat</h2>
      <div className="menu-row">
        {foodMenus.map((menu, i) => (
          <MenuItems
            key={i}
            type={menu.type}
            title={menu.title}
            items={menu.items}
          />
        ))}
      </div>
      <h2>Dryck</h2>
      <div className="menu-row">
        {drinkMenus.map((menu, i) => (
          <MenuItems
            key={i}
            type={menu.type}
            title={menu.title}
            items={menu.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
