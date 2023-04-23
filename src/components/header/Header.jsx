import Searchbar from "./Searchbar";
import useWindowSize from "../../hooks/useWindowSize";
import LanguageMenu from "./LanguageMenu";
import CurrencyMenu from "./CurrencyMenu";
import { Link } from "react-router-dom";

function Header() {
  const { windowWidth } = useWindowSize();
  const BREAKPOINT = 920;
  const showLogoText =
    windowWidth > 1150 || (windowWidth <= BREAKPOINT && windowWidth > 700);

  return (
    <header className="bg-safflower-red w-full flex flex-col justify-center gap-4 p-4">
      <div className="max-w-[1440px] w-full mx-auto h-32 flex items-center justify-center gap-12 px-4 md:px-8 py-2">
        <Link to="/" className="h-20 sm:h-full">
          <img
            className="h-20 sm:h-full"
            src="images/Logo.png"
            alt="anime accessory shop logo"
          />
        </Link>
        {showLogoText && (
          <div className="flex flex-col gap-0 items-center text-white font-bold text-lg min-w-max">
            <span>Anime Acsessory Shop</span>
            <span>“Otaku’s world”</span>
          </div>
        )}

        {windowWidth > BREAKPOINT && <Searchbar />}
        <LanguageMenu />
        <CurrencyMenu />
      </div>
      {windowWidth <= BREAKPOINT && (
        <div className="mx-8">
          <Searchbar />
        </div>
      )}
      <div className="absolute top-0 right-0 bg-white p-1">{windowWidth}</div>
    </header>
  );
}

export default Header;
