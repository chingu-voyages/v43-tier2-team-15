import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div className="card">
      <div className="item-img">
        <img src="./no__image.png" alt="No image available" />
      </div>
      <div className="favorite">
        <button className="favorite-btn">
          <FontAwesomeIcon className="icon-heart" icon={faHeartCirclePlus} />
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
  );
}
