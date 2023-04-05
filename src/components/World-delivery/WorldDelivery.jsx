export default function WorldDelivery() {
  return (
    <div className="worldDelilvery bg-birch-white h-[800px] lg:flex lg:justify-center lg:items-center">
      <div className="worldDelilvery__img py-10 px-2 flex justify-center lg:py-0 lg:px-2 lg:w-1/2">
        <img
          src="../../public/images/world-delivery.png"
          alt="World delivery image"
        />
      </div>
      <div className="worldDelilvery__text lg:w-1/2 h-[452px]">
        <h3 className="not-italic font-bold text-4xl flex justify-center text-center text-black leading-10">
          World Delivery
        </h3>
        <div className="worldDelilvery__text-paragraphs not-italic font-normal text-xl leading-6 text-black m-auto my-10 px-6 lg:my-24 lg:px-0 lg:w-[500px]">
          <p>
            Our company provides world delivery so every each of our clients can
            get what they want to buy even in the farthest places from our
            online shop.
          </p>
          <p className="mt-4">
            The estimated price for delivery depends on a country that you are
            living in so to know more about how we proceed with the world
            delivery please read the infrormation down below.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
