import Searchbar from "./Searchbar";
import useWindowSize from "../../hooks/useWindowSize";
import LanguageMenu from "./LanguageMenu";
import CurrencyMenu from "./CurrencyMenu";

function Header() {
  const { windowWidth } = useWindowSize();
  const BREAKPOINT = 820;
  return (
    <header className="bg-safflower-red w-full flex flex-col justify-center gap-4 p-4">
      <div className="max-w-7xl mx-auto h-32 flex items-center gap-12 px-4 md:px-8 py-2">
        <img
          className="h-full"
          src="/Logo.png"
          alt="anime accessory shop logo"
        />
        <div className="flex flex-col gap-0 items-center text-white font-bold text-lg min-w-max">
          <span>Anime Acsessory Shop</span>
          <span>“Otaku’s world”</span>
        </div>
        {windowWidth > BREAKPOINT && <Searchbar />}
        <LanguageMenu />
        <CurrencyMenu />
      </div>
      {windowWidth <= BREAKPOINT && <Searchbar />}
    </header>
  );
}

export default Header;
