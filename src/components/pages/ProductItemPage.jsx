import ProductItemPageSlider from "../ProductItemPage-Slider.jsx";

export default function ProductItem() {
  return (
    <div className="productItem bg-birch-white pt-24">
      <div className="productItem__main flex">
        <div className="productItem__main-img w-1/2">
            <ProductItemPageSlider/>
        </div>
        <div className="productItem__main-info w-1/2">
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
          <div className="productItem__main-infoPrice mt-20">
            <h4 className="not-italic font-bold text-4xl leading-10 text-black">
              40 euros
            </h4>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
