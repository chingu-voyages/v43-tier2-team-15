import ReadMore from "../ReadMore";
import "./OfflineShop.css";

const OfflineShop = () => {
  return (
    <div className="offline-shop flex-col items-start relative h-[63.75rem] bg-foggy-gray text-black font-main-text py-16 px-32">
      <div className="lg:flex lg:justify-evenly">
        <div className="text-[1.5rem] text-left w-[31.25rem]">
          <h1 className="text-[2.25rem] not-italic font-bold text-left text-black">
            Our offline shop
          </h1>
          <div className="description not-italic font-normal text-2xl leading-7 text-black w-[500px] h-[392px] mt-12">
            <p>
              Founded in 2015 in Kyoto, Japan, Otaku’s World has been been a
              popular and well-known for Japanese figures, video games and all
              sorts of otaku-related merchandise. Over the years we have shipped
              hundreds of thousands of items to happy customers around the
              globe.
            </p>
            <p className="mt-6">
              We are always glad to have tnew customers and provide them the
              best service and great quality merchandize, our customers deserve
              all the best in this world and we’re forever grateful to have such
              a supporting client-base!
            </p>
          </div>
        </div>
        <img
          className="main-img w-[40rem] h-[30rem] object-cover"
          alt=""
          src="src\assets\images\offlineMain.png"
        />
      </div>

      <div className="side-images flex justify-center gap-[3.75rem] mt-16">
        <img
          className="side-img relative w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
          alt=""
          src="src\assets\images\offlineSide1.png"
        />
        <img
          className="side-img w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
          alt=""
          src="/src\assets\images\offlineSide2.png"
        />
        <img
          className="side-img w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
          alt=""
          src="src\assets\images\offlineSide3.png"
        />
        <img
          className="side-img w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
          alt=""
          src="src\assets\images\offlineSide4.png"
        />
      </div>
      <div className="mt-32 flex justify-center">
        <ReadMore />
      </div>
    </div>
  );
};

export default OfflineShop;
