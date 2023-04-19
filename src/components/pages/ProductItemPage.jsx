import { useState } from "react";
import IncrementDecrement from "../Increment-Decrement.jsx";
import ProductItemPageSlider from "../ProductItemPage-Slider.jsx";
import Buy from "../Buy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer.jsx";
import Header from "../header/Header.jsx";
import NavBar from "../UI/NavBar.jsx";

export default function ProductItem() {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(40);

  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setPrice(price - 40);
    }
  };

  const setIncrease = () => {
    setAmount(amount + 1);
    setPrice(price + 40);
  };

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="productItem bg-birch-white pt-24">
        <div className="productItem__main md:flex">
          <div className="productItem__main-img md:w-1/2">
            <ProductItemPageSlider />
          </div>
          <div className="productItem__main-info p-4 md:pl-2 md:p-0 md:w-1/2">
            <h2 className="not-italic font-bold text-5xl leading-10 text-black">
              Taito Hatsune Miku Figure Costumes China Dress Ver.
            </h2>
            <p className="not-italic font-normal text-sm leading-4 text-left text-black mt-2">
              item code: 858808
            </p>
            <div className="flex mt-3">
              <div className="productItem__main-infoCircle rounded-full w-6 h-6 bg-green-700 mr-3"></div>
              <span className="not-italic font-normal text-2xl leading-7 flex items-center text-center text-black">
                In stock
              </span>
            </div>
            <ul className="not-italic font-normal text-2xl leading-7 list-none text-black mt-20">
              <li>Hatsune Miku figure from Taito!</li>
              <li>Base Stand included </li>
              <li>Multiple Colors</li>
              <li>Package Weight: 2.0 pounds</li>
            </ul>
            <div className="productItem__main-infoPrice mt-20 flex">
              <h4 className="not-italic font-bold text-3xl md:text-4xl leading-10 text-black">
                {price} euros
              </h4>
              <div>
                <IncrementDecrement
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="buyBtn mt-12 flex justify-center md:block">
                <Buy />
              </div>
              <div className="favourite mt-12 lg:mr-16 items-center flex">
                <button
                  className="h-20 h-[50px] px-4 py-0 rounded-[10px] relative"
                  onClick={handleFavoriteClick}>
                  <FontAwesomeIcon
                    className="icon-heart ml-0 h-[50px] w-[50px] relative text-safflower-red"
                    icon={isFavorited ? faHeartCircleCheck : faHeartCirclePlus}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
