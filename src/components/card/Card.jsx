import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

export default function Card({ id }) {
  const props = ItemList(id);

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="container w-[250px]">
      <div className="card relative bg-transparent flex flex-col items-end h-[auto] md:h-[410px] box-border">
        <div className="item-img absolute w-full h-[308px]">
          <img
            src={props.imageUrl}
            alt={props.name}
            className="object-cover w-full h-full rounded-[10px]"
          />
        </div>
        <div className="favorite">
          <button
            className="favorite-btn items-center flex flex-row h-[50px] w-auto px-4 py-0 rounded-[10px] relative"
            onClick={handleFavoriteClick}>
            <FontAwesomeIcon
              className="icon-heart ml-0 h-[30px] w-[30px] relative text-safflower-red"
              icon={isFavorited ? faHeartCircleCheck : faHeartCirclePlus}
            />
          </button>
        </div>
        <div className="description box-border z-[1] h-[auto] md:h-[150px] w-[250px] md:w-full mt-2 md:mt-[230px] px-3 py-0 rounded-[10px]">
          <div className="item-name font-medium text-lg leading-[21px] h-[auto] md:h-[70px] w-full pt-5 pb-0 px-0 text-left not-italic">
            {props.name}
          </div>
          <div className="low-row items-center flex flex-row h-[auto] md:h-[35px] w-full md:w-[225px] mt-2.5">
            <div className="price relative flex-1 w-full md:w-[110px] h-full font-bold no-underline">
              {props.price}
            </div>
            <button className="to-cart text-white font-bold rounded-[10px] h-[auto] md:h-[35px] w-full md:w-[75px] no-underline mt-2.5 md:mt-0 md:ml-3 hover:scale-105 transition duration-500">
              To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
