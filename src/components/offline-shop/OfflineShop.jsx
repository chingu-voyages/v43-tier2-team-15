import ReadMore from "../ReadMore";
import "./OfflineShop.css";

const OfflineShop = () => {
  return (
    <div className="offline-shop flex-col items-start relative h-fit bg-foggy-gray text-black font-main-text py-16  px-4 md:px-32">
      <div className="lg:flex lg:justify-evenly">
        <div className="text-[1.5rem] text-left ">
          <h1 className="text-[2.25rem] not-italic font-bold text-left text-black">
            Our offline shop
          </h1>
          <div className="description not-italic font-normal text-md md:text-xl lg:text-2xl leading-7 text-black  mt-12">
            <p className="">
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
          className="main-img m-auto mt-8 w-[21.2rem] h-[18.3rem]  lg:mt-0 md:w-[40rem] md:h-[30rem] object-cover"
          alt=""
          src="src\assets\images\offlineMain.png"
        />
      </div>

      <div className="side-images flex justify-between mt-6 md:mt-16">
        <img
          className="side-img w-[8.2rem] h-[5.3rem] md:w-[10.2rem] md:h-[7.3rem] lg:w-[16.2rem] lg:h-[13.3rem] object-cover"
          alt=""
          src="src\assets\images\offlineSide1.png"
        />
        <img
          className="side-img w-[8.2rem] h-[5.3rem] md:w-[10.2rem] md:h-[7.3rem] lg:w-[16.2rem] lg:h-[13.3rem] object-cover"
          alt=""
          src="/src\assets\images\offlineSide2.png"
        />
        <img
          className="side-img w-[8.2rem] h-[5.3rem] md:w-[10.2rem] md:h-[7.3rem] lg:w-[16.2rem] lg:h-[13.3rem] object-cover"
          alt=""
          src="src\assets\images\offlineSide3.png"
        />
        <img
          className="side-img w-[8.2rem] h-[5.3rem] md:w-[10.2rem] md:h-[7.3rem] lg:w-[16.2rem] lg:h-[13.3rem] object-cover"
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
