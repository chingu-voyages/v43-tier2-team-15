import footer__logo from "../../public/images/footer__img.png";
import instagram__icon from "../../public/images/instagram__icon.png";
import facebook__icon from "../../public/images/facebook__icon.png";
import telegram__icon from "../../public/images/telegram__icon.png";

export default function Footer() {
  return (
    <div className="footer h-full bg-[#d63447] py-2 not-italic md:h-80 md:flex md:justify-around md:items-center">
      <div className="footer__img h-30 w-30 md:h-40 md:w-40 ">
        <img
          src={footer__logo}
          alt="“Otaku’s world” logo"
          className="mx-auto md:m-0"
        />
      </div>
      <div className="footer__contactUs text-center mt-3  pt-1 md:mt-0 md:text-left">
        <h4 className="text-black font-bold text-xl text-center md:text-2xl md:leading-7 md:text-left ">
          Contact us
        </h4>
        <div className="footer__contactUs-icons flex justify-center items-center">
          <img
            src={instagram__icon}
            alt="“Otaku’s world” instagram page"
            className="my-2 mx-2 md:my-7 md:mr-7"
          />

          <img
            src={facebook__icon}
            alt="“Otaku’s world” facebook page"
            className="my-2 mx-2 md:my-7 md:mr-7"
          />

          <img
            src={telegram__icon}
            alt="“Otaku’s world” telegram page"
            className="my-2 mx-2 md:my-7 md:mr-7"
          />
        </div>
        <a
          className="footer__contactUs-phone font-bold text-md text-black no-underline md:leading-5 md:text-lg  "
          href="tel:+3805454544615"
        >
          +3805454544615
        </a>
      </div>
      <div className="footer__about mt-3 md:mt-10">
        <h4 className="font-bold text-xl text-black text-center md:text-2xl md:leading-7 md:text-left ">
          About
        </h4>
        <ul className="md:mt-5 md:text-left list-none text-center">
          <li className="mb-1 md:mb-3">
            <a
              href="/"
              className="font-normal text-lg leading-5 text-center no-underline text-black"
            >
              Company
            </a>
          </li>
          <li className="mb-1 md:mb-3">
            <a
              href="/"
              className="font-normal text-lg leading-5 text-center no-underline text-black"
            >
              FAQ
            </a>
          </li>
          <li className="mb-1 md:mb-3">
            <a
              href="/"
              className="font-normal text-lg leading-5 text-center no-underline text-black"
            >
              Delivery
            </a>
          </li>
          <li className="mb-1 md:mb-3">
            <a
              href="/"
              className="font-normal text-lg leading-5 text-center no-underline text-black"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__workSchedule mt-3 md:mt-0">
        <h4 className="font-bold text-xl md:text-2xl leading-7 text-center text-black">
          Work schedule
        </h4>
        <div className="footer__workSchedule-text  font-normal text-lg leading-5 text-center text-black mt-2 md:mt-12">
          <p>Schedule for Call center</p>
          <p>Tuesday - Sunday from 11 to 17</p>
          <p>Physical store - from 11 to 19</p>
        </div>
      </div>
    </div>
  );
}
