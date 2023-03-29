export default function WelcomeSection() {
  return (
    <div className="welcome">
      <div className="welcome__img w-full h-[724px] bg-welcome-background bg-cover flex justify-center items-center">
        <div className="welcome__title z-10  md:w-[536px]">
          <h1 className=" not-italic font-bold text-white leading-20 text-5xl md:text-8xl">
            Welcome to:
          </h1>

          <div className="welcome__subtitle md:w-[326px] mt-4">
            <h2 className="not-italic font-medium  text-white  text-4xl leading-[56px] md:text-5xl">
              “Otaku’s world”
            </h2>
          </div>

          <div className="welcome__text md:w-[637px] h-20 mt-4">
            <p className="not-italic font-normal leading-7 text-xl text-white md:text-2xl ">
              Anime acssesory shop that provides world delivery, wholesales and
              other futures and of course amazing customer service and products!
            </p>
          </div>
          <div className="welcome__btn mt-16 ">
            <button className="not-italic font-bold text-lg leading-5 text-center text-white w-[287px] h-20 bg-bonfire rounded-lg flex items-center justify-center hover:scale-105 transition duration-500">
              Go to catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

