import Header from "../header/Header";
import NavBar from "../UI/NavBar";

export default function Cart() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="cart px-16 py-12">
        <div className="breadcrumps"></div>
        <h3 className=" mt-16 not-italic font-bold text-4xl leading-10 text-left text-black">
          Your Cart
        </h3>
        <div className="order flex justify-between w-1/2 mt-16">
          <p className="not-italic font-bold text-2xl leading-7 text-center text-black">
            Your order
          </p>
          <p className="not-italic font-normal text-lg leading-5 text-black cursor-pointer hover:text-bonfire">
            Edit
          </p>
        </div>

        <div className="order__columns flex justify-between">
          <div className="order__column1 w-1/2">
            <div className="line w-full border border-black mt-10 mb-12"></div>
            <div className="order__column1-itemInfo flex h-fit  mb-16 justify-between">
              <div className="flex items-center">
                <img
                  src="/images/cart_product1.png"
                  alt="Product Item image"
                  className="w-32 h-24"
                />
              </div>
              <div className="order__info">
                <h5 className="not-italic font-bold text-lg leading-5 text-center text-black">
                  Taito Hatsune Miku Figure...
                </h5>
                <ul className="mt-4 list-none">
                  <li>Hatsune Miku figure from Taito!</li>
                  <li>Base Stand included</li>
                  <li>Multiple Colors</li>
                </ul>
              </div>
              <div className="order__price not-italic font-bold text-xl leading-6 flex items-center text-center text-black">
                40 euros
              </div>
              <div className="order__bin flex items-center ease-[ease] hover:scale-105 transition duration-500 cursor-pointer">
                <img src="/images/cart_bin.png" alt="Remove the item" />
              </div>
            </div>
            <div className="order__column1-itemInfo flex justify-between h-fit mb-16">
              <div className="flex items-center">
                <img
                  src="/images/cart_product2.png"
                  alt="Product Item Image"
                  className="w-32 h-24"
                />
              </div>
              <div className="order__info">
                <h5 className="not-italic font-bold text-lg leading-5 text-black">
                  Anime Tokyo Ghoul Kaneki...
                </h5>
                <p className="mt-4 w-64">
                  Toy size-about 23 cm high, hand-made in environmental
                  protection, will not cause any harm to the human body, it is a
                  very worthy collection of anime models for anime fans.
                </p>
              </div>
              <div className="order__price not-italic font-bold text-xl leading-6 flex items-center text-center text-black">
                25 euros
              </div>
              <div className="order__bin flex items-center ease-[ease] hover:scale-105 transition duration-500 cursor-pointer">
                <img src="/images/cart_bin.png" alt="Remove the item" />
              </div>
            </div>
            <div className="order__column1-itemInfo flex justify-between h-fit">
              <div className="flex items-center">
                <img
                  src="/images/cart_product3.png"
                  alt="Product Item Image"
                  className="w-32 h-24"
                />
              </div>
              <div className="order__info">
                <h5 className="not-italic font-bold text-lg leading-5 text-center text-black">
                  Kotobukiya My Teen Romantic...
                </h5>
                <ul className="mt-4 list-none">
                  <li>A Kotobukiya Japanese import</li>
                  <li>From the popular anime series</li>
                  <li>Based on an all-new original illustration</li>
                  <li>Faithfully recreates every detail</li>
                </ul>
              </div>
              <div className="order__price not-italic font-bold text-xl leading-6 flex items-center text-center text-black">
                70 euros
              </div>
              <div className="order__bin flex items-center ease-[ease] hover:scale-105 transition duration-500 cursor-pointer">
                <img src="/images/cart_bin.png" alt="Remove the item" />
              </div>
            </div>
            <div className="line w-full border border-black mt-10"></div>
          </div>
          <div className="order__column2 w-1/2 flex items-center justify-end">
            <div className="w-[500px] h-[510px] rounded-lg bg-[#D1CEBD]">
              <div className="h-2/5 order__column2-text flex justify-around">
                <p className="not-italic font-bold text-2xl leading-7 flex items-center text-center text-black">
                  Your total:
                </p>
                <p className="not-italic font-bold text-2xl leading-7 flex items-center text-center text-black">
                  450 euros
                </p>
              </div>
              <div className="h-3/5">
                <div className="flex items-center justify-center">
                  <button className="h-20 w-[370px] not-italic font-bold text-lg leading-5 text-center text-white bg-bonfire ease-[ease] rounded-[10px] hover:scale-105 transition duration-500">
                    Proceed order
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className="mt-10 h-20 w-[370px] not-italic font-bold text-lg leading-5 text-center text-white ease-[ease] border border-bonfire rounded-[10px] hover:scale-105 transition duration-500">
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
