import footer__logo from "../../public/images/footer__img.png";
import instagram__icon from "../../public/images/instagram__icon.png";
import facebook__icon from "../../public/images/facebook__icon.png";
import telegram__icon from "../../public/images/telegram__icon.png";

export default function Footer() {
  return (
    <div className="footer h-80 bg-[#d63447] not-italic flex justify-around items-center">
      <div className="footer__img">
        <img src={footer__logo} alt="“Otaku’s world” logo" />
      </div>
      <div className="footer__contactUs">
        <h4>Contact us</h4>
        <div className="footer__contactUs-icons">
          <img src={instagram__icon} alt="“Otaku’s world” instagram page" />

          <img src={facebook__icon} alt="“Otaku’s world” facebook page" />

          <img src={telegram__icon} alt="“Otaku’s world” telegram page" />
        </div>
        <a className="footer__contactUs-phone" href="tel:+3805454544615">
          +3805454544615
        </a>
      </div>
      <div className="footer__about">
        <h4>About</h4>
        <ul>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Delivery</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
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
