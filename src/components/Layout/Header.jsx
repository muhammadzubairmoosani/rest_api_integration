import HamburgerMenu from "../Navigation/HamburgerMenu";
import HorizontalMenu from "../Navigation/HorizontalMenu";

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Facebook</div>
      <div className="hidden md:block">
        <HorizontalMenu />
      </div>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
