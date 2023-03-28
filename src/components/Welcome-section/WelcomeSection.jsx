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
      <h1 className="welcome__title">
        Welcome to: <br /> <span>“Otaku’s world”</span>
      </h1>
      <p className="welcome__text">
        Anime acssesory shop that provides world delivery, wholesales and other
        futures and of course amazing customer service and products!
      </p>
      <button className="welcome__btn">Go to catalogue</button>
    </div>
  );
}
