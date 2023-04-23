import { useState } from "react";
import IncrementDecrement from "../Increment-Decrement.jsx";
import ProductItemPageSlider from "../ProductItemPage-Slider.jsx";
import Buy from "../Buy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faHeartCirclePlus,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import { useRef } from "react";

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

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const deliveryRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== deliveryRef.current) {
      setOpen(false);
    }
  });

  return (
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
                onClick={handleFavoriteClick}
              >
                <FontAwesomeIcon
                  className="icon-heart ml-0 h-[50px] w-[50px] relative text-safflower-red"
                  icon={isFavorited ? faHeartCircleCheck : faHeartCirclePlus}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about mt-12 ml-0 lg:ml-16">
        <h3 className="not-italic font-bold text-2xl leading-7 text-left text-black">
          About the product
        </h3>
      </div>
      <div className="wrapper mt-5 ml-0 lg:ml-16 block md:flex md:justify-evenly">
        <div className="accordion w-3/5">
          {accordionData.map((item, i) => (
            <div className="item mt-1  rounded-lg bg-[#D1CEBD]">
              <div
                className="title py-4 not-italic font-normal text-lg leading-5 flex items-center text-left text-black"
                onClick={() => toggle(i)}
              >
                <span className="cursor-pointer ml-6 text-black text-center">
                  {selected === i ? "-" : "+"}
                </span>
                <h4 className="cursor-pointer ml-6">{item.question}</h4>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="dropdown mt-1 w-2/5 w-40 h-20 rounded-lg bg-[#D1CEBD] h-fit">
            <div className="flex align-center justify-around py-6 cursor-pointer">
              <span>
                <img
                  src="/images/Delivery.png"
                  alt="Delivery"
                  className="w-5 h-5 mr-2"
                />
              </span>
              <span onClick={() => setOpen(!open)} ref={deliveryRef}>
                Delivery
              </span>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />{" "}
              </span>
            </div>

            {open && (
              <div ref={menuRef}>
                <ul>
                  {dropdownMenu.map((menu) => (
                    <li
                      key={menu}
                      className="cursor-pointer p-2 m-1 rounded hover:bg-[#F6EEDF] "
                      onClick={() => setOpen(false)}
                    >
                      {menu}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-5 dropdown w-2/5 w-40 h-20 rounded-lg bg-[#D1CEBD] h-fit">
            <div className="flex align-center justify-around py-6 cursor-pointer">
              <span>Return Policy</span>
              <span>
                <FontAwesomeIcon icon={faAngleDown} />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const dropdownMenu = [
  "Local shipping",
  "International shipping",
  "Expedited shipping",
];

const accordionData = [
  {
    question: "Material and Height",
    answer: "Material: ABS, PVC; Height = 180mm (7.02in)",
  },
  {
    question: "Type and Brand",
    answer: "Figure, Taito",
  },
  {
    question: "Realese date",
    answer: "12/2020 As Exclusive «Bilbili Exclusive»",
  },
];
