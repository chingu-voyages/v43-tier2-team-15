import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

export default function Card(input) {
  var props = ItemList(input.id);

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="item-img">
          <img src={props.imageUrl} alt={props.name} />
        </div>
        <div className="favorite">
          <button className="favorite-btn" onClick={handleFavoriteClick}>
            <FontAwesomeIcon
              className="icon-heart"
              icon={isFavorited ? faHeartCircleCheck : faHeartCirclePlus}
            />
          </button>
        </div>
        <div className="description">
          <div className="item-name">{props.name}</div>
          <div className="flex-row">
            <div className="price">
              <h1>{props.price}</h1>
            </div>
            <button className="to-cart">To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
