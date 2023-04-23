import { useState } from "react";

export default function ProductItemSlider() {
  const images = [
    { id: 0, value: "/images/product_item-img1.png" },
    { id: 1, value: "/images/Product_item_img2.jpg" },
    { id: 2, value: "/images/Product_item_img3.jpg" },
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
      <div className="flex justify-center m-auto p-5">
        {images.map((data, i) => (
          <div className="m-auto h-24" >
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
              className="h-24 w-32"
              
            />
          </div>
        ))}
      </div>
    </div>
  );
}
