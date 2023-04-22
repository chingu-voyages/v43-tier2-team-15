export default function Checkout() {
  return (
    <div className="checkpout-page">
      <header className="bg-safflower-red w-full flex flex-col justify-center gap-4 p-4">
        <div className="max-w-[1440px] w-full mx-auto h-32 flex items-center justify-center gap-12 px-4 md:px-8 py-2">
          <Link to="/" className="h-20 sm:h-full">
            <img
              className="h-20 sm:h-full"
              src="/Logo.png"
              alt="anime accessory shop logo"
            />
          </Link>
          {showLogoText && (
            <div className="flex flex-col gap-0 items-center text-white font-bold text-lg min-w-max">
              <span>Anime Acsessory Shop</span>
              <span>“Otaku’s world”</span>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
