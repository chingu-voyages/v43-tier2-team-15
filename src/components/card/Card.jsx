import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleCheck,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  const [isFavorited, setIsFavorited] = useState(false);

  const hadleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="item-img">
          <img src="/images/no__image.png" alt="No image available" />
        </div>
        <div className="favorite">
          <button className="favorite-btn" onClick={hadleFavoriteClick}>
            <FontAwesomeIcon
              className="icon-heart"
              icon={isFavorited ? faHeartCircleCheck : faHeartCirclePlus}
            />
          </button>
        </div>
        <div className="description">
          <div className="item-name">Lorem Ipsum</div>
          <div className="flex-row">
            <div className="price">
              <h1>10 euros</h1>
            </div>
            <button className="to-cart">To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
