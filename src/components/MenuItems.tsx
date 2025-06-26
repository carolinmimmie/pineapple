import type { IMenuCategory } from "../models/IMenu";

const MenuItems = ({ title, items }: IMenuCategory) => {
  const sortedItems = [...items].sort(
    (a, b) => Number(a.price) - Number(b.price)
  );
  return (
    <section>
      <h4>{title}</h4>
      <div className="menu-items-border"></div>
      <div className="menu-items-container">
        <ul>
          {sortedItems.map((menuItems, i) => (
            <li key={i}>
              <span className="dish-name">
                {menuItems.name}{" "}
                <span className="dish-description">
                  {menuItems.description}
                </span>
              </span>
              <span className="price">{menuItems.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuItems;
