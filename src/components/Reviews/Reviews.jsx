import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import data from "./reviewsData";
import "./Reviews.css";

function ReviewsList() {
  const [showFade, setShowFade] = useState(false);

  const handleScroll = (e) => {
    const top = e.target.scrollTop === 0;
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    setShowFade(!top && !bottom);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Reviews ({data.length})</h2>
      <div className="h-80 overflow-y-scroll " onScroll={handleScroll}>
        {data.map((review, index) => (
          <div
            key={index}
            className={`my-4 py-2 ${
              showFade && index < 2
                ? "opacity-70 transition-opacity duration-500"
                : showFade && index > data.length - 4
                ? "opacity-80 transition-opacity duration-500"
                : "opacity-100"
            }`}>
            <div className="flex justify-between">
              <span className="text-gray-900 font-bold">{review.name}</span>
              <span className="text-gray-800">
                {review.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="my-2">
              {Array.from(Array(review.rating)).map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-bonfire"
                />
              ))}
              {Array.from(Array(5 - review.rating)).map((_, index) => (
                <FontAwesomeIcon key={index} icon={["far", "star"]} />
              ))}
            </div>
            <p className="text-gray-800">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsList;
