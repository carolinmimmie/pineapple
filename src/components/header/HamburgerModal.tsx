import MenuItems from "./MenuItems";

// det här är det som syns när man klickar på hamburgerikonen
export const HamburgerModal = () => {
  return (
    <div className="hamburger-modal">
      <div className="hamburger-modal__menu-items">
        <MenuItems />
      </div>
    </div>
  );
};

export default HamburgerModal;
