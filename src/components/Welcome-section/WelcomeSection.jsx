export default function WelcomeSection() {
  return (
    <div className="welcome">
      <div className="welcome__img w-full h-[724px] relative">
        <img
          src="./././public/images/welcome__img.png"
          alt="Welcome to “Otaku’s world”"
          className="w-full h-full z-0 object-cover absolute top-0 left-0"
        />
      </div>
      <div className="welcome__title z-10 absolute top-[340px] left-[484px] w-[536px]">
        <h1 className="not-italic font-bold flex items-center text-center text-white leading-20 text-8xl">
          Welcome to:
        </h1>

        <div className="welcome__subtitle w-[326px] mt-4">
          <h2 className="not-italic font-medium text-5xl flex items-center text-center text-white leading-[56px]">
            “Otaku’s world”
          </h2>
        </div>

        <div className="welcome__text w-[637px] h-20 mt-4">
          <p className="not-italic font-normal text-2xl leading-7 flex items-center text-white ">
            Anime acssesory shop that provides world delivery, wholesales and
            other futures and of course amazing customer service and products!
          </p>
        </div>
        <div className="welcome__btn mt-16 ">
          <button className="not-italic font-bold text-lg leading-5 text-center text-white w-[287px] h-20 bg-bonfire rounded-lg flex items-center justify-center">
            Go to catalogue
          </button>
        </div>
      </div>
    </div>
  );
}
