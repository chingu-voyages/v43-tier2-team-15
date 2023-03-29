import styles from './OffLine-shop.css';

export default function OffLineShop() {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 ml-8">

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between">
          <div className="flex flex-col px-4">
            <span className="text-base font-bold ml-20">Our offline shop</span>
            <p className="text-base font-normal ml-20">
              Founded in 2015 in Kyoto, Japan, Otaku’s World has been been a
              popular and well-known for Japanese figures, video games and all
              sorts of otaku-related merchandise. Over the years we have shipped
              hundreds of thousands of items to happy customers around the
              globe. We are always glad to have tnew customers and peovide them
              the best service and great quality merchandize, our customers
              deserve all the best in this world and we’re forever grateful to
              have such a supporting client-base!
            </p>
          </div>
          <img
            className="w-1/2 py-2 pr-4 ml-8"
            src="./src/assets/images/offLineMain.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="flex">
            <img
            className=" py-2 pr-4 ml-8"
            src="./src/assets/images/offLineSide1.png"
            alt=""
          ></img>
            <img
            className=" py-2 pr-4 ml-8"
            src="./src/assets/images/offLineSide2.png"
            alt=""
          ></img>
            <img
            className=" py-2 pr-4 ml-8"
            src="./src/assets/images/offLineSide3.png"
            alt=""
          ></img>
      </div>
    </div>
  );
}
