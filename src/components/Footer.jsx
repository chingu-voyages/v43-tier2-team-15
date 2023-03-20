import footer__logo from "../../public/images/footer__img.png";
import instagram__icon from "../../public/images/instagram__icon.png";
import facebook__icon from "../../public/images/facebook__icon.png";
import telegram__icon from "../../public/images/telegram__icon.png";

export default function Footer() {
  return (
    <div className="footer h-80 bg-[#d63447] not-italic flex justify-around items-center">
      <div className="footer__img h-40 w-40">
        <img src={footer__logo} alt="“Otaku’s world” logo" />
      </div>
      <div className="footer__contactUs">
        <h4 className="font-bold text-2xl leading-7 text-left text-black">
          Contact us
        </h4>
        <div className="footer__contactUs-icons flex justify-center items-center">
          <img
            src={instagram__icon}
            alt="“Otaku’s world” instagram page"
            className="my-7 mr-7"
          />

          <img
            src={facebook__icon}
            alt="“Otaku’s world” facebook page"
            className="my-7 mr-7"
          />

          <img
            src={telegram__icon}
            alt="“Otaku’s world” telegram page"
            className="my-7 mr-7"
          />
        </div>
        <a
          className="footer__contactUs-phone font-bold text-lg leading-5 text-center text-black no-underline"
          href="tel:+3805454544615"
        >
          +3805454544615
        </a>
      </div>
      <div className="footer__about mt-10">
        <h4 className="font-bold text-2xl leading-7 text-left text-black">
          About
        </h4>
        <ul className="mt-5 list-none">
          <li className="mb-3">
            <a href="/" className="font-normal text-lg leading-5 text-center no-underline text-black">Company</a>
          </li>
          <li className="mb-3">
            <a href="/" className="font-normal text-lg leading-5 text-center no-underline text-black">FAQ</a>
          </li>
          <li className="mb-3">
            <a href="/" className="font-normal text-lg leading-5 text-center no-underline text-black">Delivery</a>
          </li>
          <li className="mb-3">
            <a href="/" className="font-normal text-lg leading-5 text-center no-underline text-black">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer__workSchedule">
        <h4>Work schedule</h4>
        <div className="footer__workSchedule-text">
          <p>Schedule for Call center</p>
          <p>Tuesday - Sunday from 11 to 17</p>
          <p>Physical store - from 11 to 19</p>
        </div>
      </div>
    </div>
  );
}
