import { Link } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="checkpout-page bg-birch-white">
      <header className="bg-safflower-red w-full flex flex-col gap-4 p-4">
        <div className="max-w-[1440px] w-full mx-auto h-32 flex items-center justify-center gap-12 px-4 md:px-8 py-2">
          <Link to="/" className="h-20 sm:h-full">
            <img
              className="h-20 sm:h-full"
              src="/Logo.png"
              alt="anime accessory shop logo"
            />
          </Link>
          <div className="flex flex-col gap-0 items-center text-white font-bold text-lg min-w-max">
            <span>Anime Acsessory Shop</span>
            <span>“Otaku’s world”</span>
          </div>
        </div>
      </header>
      <div className="order flex justify-around md:justify-between md:w-1/2 mt-16">
        <p className="not-italic font-bold text-2xl leading-7 text-center text-black">
          In your cart
        </p>
        <p className="not-italic font-normal text-lg leading-5 text-black cursor-pointer hover:text-bonfire">
          Edit
        </p>
      </div>
      <div className="order__column1 lg:w-1/2">
        <div className="line w-full border border-black mt-6 md:mt-10 mb-12"></div>
        <div className="order__column1-itemInfo flex h-fit  mb-16 justify-between">
          <div className="flex items-center">
            <img
              src="/images/cart_product1.png"
              alt="Product Item image"
              className="w-32 h-24 shadow-[0px_4px_4px_0px_#00000040] rounded-[10px]"
            />
          </div>
          <div className="order__info">
            <h5 className="not-italic font-bold text-md md:text-lg leading-5 text-center text-black">
              Taito Hatsune Miku Figure...
            </h5>
            <ul className=" mt-2 md:mt-4 ml-2 md:ml-0 list-none not-italic font-normal text-sm md:text-base leading-4 text-black">
              <li>Hatsune Miku figure from Taito!</li>
              <li>Base Stand included</li>
              <li>Multiple Colors</li>
            </ul>
          </div>
          <div className="order__price not-italic font-bold text-lg md:text-xl leading-6 flex items-center text-center text-black">
            40 euros
          </div>
        </div>
        <div className="order__column1-itemInfo flex justify-between h-fit mb-16">
          <div className="flex items-center">
            <img
              src="/images/cart_product2.png"
              alt="Product Item Image"
              className="w-32 h-24 shadow-[0px_4px_4px_0px_#00000040] rounded-[10px]"
            />
          </div>
          <div className="order__info">
            <h5 className="not-italic font-bold text-md md:text-lg text-center leading-5 text-black">
              Anime Tokyo Ghoul Kaneki...
            </h5>
            <p className="mt-2 md:mt-4 w-48 ml-2 md:ml-0 md:w-64 not-italic font-normal text-sm md:text-base leading-4 text-black">
              Toy size-about 23 cm high, hand-made in environmental protection,
              will not cause any harm to the human body, it is a very worthy
              collection of anime models for anime fans.
            </p>
          </div>
          <div className="order__price not-italic font-bold text-lg md:text-xl leading-6 flex items-center text-center text-black">
            25 euros
          </div>
        </div>
        <div className="order__column1-itemInfo flex justify-between h-fit">
          <div className="flex items-center">
            <img
              src="/images/cart_product3.png"
              alt="Product Item Image"
              className="w-32 h-24 shadow-[0px_4px_4px_0px_#00000040] rounded-[10px]"
            />
          </div>
          <div className="order__info">
            <h5 className="not-italic font-bold text-md md:text-lg leading-5 text-center text-black">
              Kotobukiya My Teen Romantic...
            </h5>
            <ul className="mt-2 md:mt-4 ml-2 md:ml-0 list-none not-italic font-normal text-sm md:text-base leading-4 text-black">
              <li>A Kotobukiya Japanese import</li>
              <li>From the popular anime series</li>
              <li>Based on an all-new original illustration</li>
              <li>Faithfully recreates every detail</li>
            </ul>
          </div>
          <div className="order__price not-italic font-bold text-lg md:text-xl leading-6 flex items-center text-center text-black">
            70 euros
          </div>
        </div>
        <div className="line w-full border border-black mt-6 md:mt-10 mb-12"></div>
        <div>
          <div className="calculations flex flex-col-2">
            <div className="summary flex flex-col gap-y-8 text-sm font-normal leading-4 tracking-normal text-left">
              <p>Items summary</p>
              <p>Delivery</p>
              <p>Discount</p>
            </div>
            <div className="prices-total flex flex-col gap-y-4 text-[22px] font-bold leading-[26px] tracking-normal">
              <p>135 euros</p>
              <p>10 euros</p>
              <p>60 euros</p>
            </div>
          </div>
          <div className="line w-full border border-black mt-6 md:mt-10 mb-12"></div>
          <div className="total flex flex-col-2">
            <div className="text-[22px] font-bold leading-[26px] tracking-normal">
              <p>Your total</p>
            </div>
            <div className="text-[22px] font-bold leading-[26px] tracking-normal">
              <p>65 euros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
