import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Catalogue from "../Layout/Catalogue";

export default function WelcomeSection() {
  const [open, setOpen] = useState(false);
  let ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    });
  });

  return (
    <div className="welcome relative">
      <div className="welcome__img w-full h-[724px] bg-welcome-background bg-cover flex justify-center items-center">
        <div className="welcome__title z-10  md:w-[536px]">
          <h1 className=" not-italic font-bold text-white leading-20 text-6xl text-center md:text-left md:text-8xl">
            Welcome to:
          </h1>

          <div className="welcome__subtitle md:w-[326px] mt-4">
            <h2 className="not-italic font-medium  text-white  text-4xl leading-[56px] text-center md:text-left md:text-5xl">
              “Otaku’s world”
            </h2>
          </div>

          <div className="welcome__text md:w-[637px] h-20 mt-4">
            <p className="not-italic font-normal leading-7 text-xl text-white px-6 text-center md:text-left md:px-0 md:text-2xl ">
              Anime acssesory shop that provides world delivery, wholesales and
              other futures and of course amazing customer service and products!
            </p>
          </div>
          <div className="welcome__btn mt-16 ">
            <button
              className="not-italic font-bold text-lg leading-5 text-center text-white w-[287px] h-20 bg-bonfire rounded-lg flex items-center justify-center m-auto md:mx-0 hover:scale-105 transition duration-500"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Go to catalogue
            </button>
            {open && <Catalogue ref={ref} />}
          </div>
        </div>
      </div>
    </div>
  );
}
