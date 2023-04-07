import ReadMore from "../ReadMore";
import "./OfflineShop.css";

const OfflineShop = () => {
  return (
    <div className="relative bg-foggy-gray w-full overflow-hidden flex flex-col items-center justify-center text-center text-[1.13rem] text-black font-main-text">
      <div className="self-stretch relative bg-lightgray h-[63.75rem] shrink-0">
        <div className="absolute top-[55.9rem] left-[35.9rem] flex flex-col py-[0rem] px-[3.3rem] box-border items-end justify-center">
          <b className="self-stretch flex-1 relative flex items-center justify-center">
            <ReadMore />
          </b>
        </div>
        <div className="absolute top-[9.38rem] left-[7.81rem] text-[1.5rem] text-left flex items-center w-[31.25rem]">
          <span className=" w-full">
            <p className="m-0">
              Founded in 2015 in Kyoto, Japan, Otaku’s World has been been a
              popular and well-known for Japanese figures, video games and all
              sorts of otaku-related merchandise. Over the years we have shipped
              hundreds of thousands of items to happy customers around the
              globe.
              <br></br>We are always glad to have tnew customers and provide
              them the best service and great quality merchandize, our customers
              deserve all the best in this world and we’re forever grateful to
              have such a supporting client-base!
            </p>
          </span>
        </div>
        <b className="absolute top-[3.8rem] left-[7.8rem] text-[2.25rem]">
          Our offline shop
        </b>
        <img
          className="main-img absolute top-[3.8rem] left-[42.1rem] rounded-3xs w-[40.2rem] h-[29.9rem] object-cover"
          alt=""
          src="src\assets\images\offlineMain.png"
        />
        <div className="absolute top-[36.9rem] left-[7.9rem] w-[74.2rem] flex flex-row items-start justify-center gap-[3.75rem]">
          <img
            className="side-img relative rounded-3xs w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
            alt=""
            src="src\assets\images\offlineSide1.png"
          />
          <img
            className="side-img  relative rounded-3xs w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
            alt=""
            src="/src\assets\images\offlineSide2.png"
          />
          <img
            className="side-img  relative rounded-3xs w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
            alt=""
            src="src\assets\images\offlineSide3.png"
          />
          <img
            className="side-img relative rounded-3xs w-[16.2rem] h-[13.3rem] shrink-0 object-cover"
            alt=""
            src="src\assets\images\offlineSide4.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OfflineShop;
