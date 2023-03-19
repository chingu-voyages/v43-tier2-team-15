import Searchbar from "./Searchbar";

function Header() {
  return (
    <header className="bg-safflower-red w-full h-32 ">
      <div className="max-w-6xl mx-auto h-32 flex items-center gap-8 px-4 md:px-8 py-6">
        <img
          className="h-full"
          src="/Logo.png"
          alt="anime accessory shop logo"
        />
        <div className="flex flex-col gap-0 items-center text-white font-bold text-lg">
          <span>Anime Acsessory Shop</span>
          <span>“Otaku’s world”</span>
        </div>
        <Searchbar />
        <div className="text-white flex gap-8">
          <span>Language Dropdown</span>
          <span>Currency Dropdown</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
