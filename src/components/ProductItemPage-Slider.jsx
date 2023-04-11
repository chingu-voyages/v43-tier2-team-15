import { useState } from "react";

export default function ProductItemSlider() {
  const images = [
    { id: 0, value: "./public/images/product_item-img1.png" },
    { id: 1, value: "./public/images/product_item-img3.png" },
    { id: 2, value: "./public/images/product_item-img4.png" },
  ];

  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (index) => {
    console.log(index);
    const slider = images[index];
    setSliderData(slider);
  };
  return (
    <div className="slider">
      <img src={sliderData.value} height="570" width="500" className="m-auto" />
      <div className="flex justify-center w-[500px] p-5">
        {images.map((data, i) => (
          <div className="m-auto">
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
              width="135"
              height="90"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
