import { Link } from "react-router-dom";

const logoUrl = "/images/footer__img.png";

const icons = [
  {
    name: "“Otaku’s world” instagram page",
    iconUrl: "/images/instagram__icon.png",
  },
  {
    name: "“Otaku’s world” facebook page",
    iconUrl: "/images/facebook__icon.png",
  },
  {
    name: "“Otaku’s world” telegram page",
    iconUrl: "/images/telegram__icon.png",
  },
];

export default function Footer() {
  return (
    <footer className="footer mx-auto w-full h-full bg-safflower-red py-5 not-italic md:h-80 md:flex md:justify-around md:items-center">
      <div className="footer__section1 flex px-5 max-w-[1440px] justify-around items-center md:w-6/12 md:justify-around">
        <div className="footer__img h-25 w-25 md:h-40 md:w-40 ">
          <Link to="/">
          <img
            src={logoUrl}
            alt="“Otaku’s world” logo"
            className="mx-auto md:m-0"
          /></Link>
        </div>
        <div className="footer__contactUs text-center mt-3  pt-1 md:mt-0 md:text-left">
          <h4 className="text-black font-bold text-xl text-center md:text-2xl md:leading-7 md:text-left ">
            Contact us
          </h4>
          <div className="footer__contactUs-icons flex justify-center items-center">
            {icons.map((icon) => (
              <img
                src={icon.iconUrl}
                alt={icon.name}
                className="my-2 mx-2 md:my-7 md:mr-7"
              />
            ))}
          </div>
          <a
            className="footer__contactUs-phone font-bold text-md text-black no-underline md:leading-5 md:text-lg  "
            href="tel:+3805454544615"
          >
            +3805454544615
          </a>
        </div>
      </div>
      <div className="footer__section2 flex px-5 w-full justify-around items-center flex-row-reverse md:w-6/12 md:justify-around md:flex-row">
        <div className="footer__about mt-3 md:mt-10">
          <h4 className="font-bold text-md text-black text-center md:text-2xl md:leading-7 md:text-left ">
            About
          </h4>
          <ul className="md:mt-5 md:text-left list-none text-center">
            <li className="-m-1 md:mb-3">
              <a
                href="/"
                className="font-normal text-sm leading-5 text-center no-underline text-black md:text-lg"
              >
                Company
              </a>
            </li>
            <li className="-m-1 md:mb-3">
              <a
                href="/"
                className="font-normal text-sm leading-5 text-center no-underline text-black md:text-lg"
              >
                FAQ
              </a>
            </li>
            <li className="-m-1  md:mb-3">
              <a
                href="/"
                className="font-normal text-sm leading-5 text-center no-underline text-black md:text-lg"
              >
                Delivery
              </a>
            </li>
            <li className="-m-1  md:mb-3">
              <a
                href="/"
                className="font-normal text-sm leading-5 text-center no-underline text-black md:text-lg"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__workSchedule mt-3 md:mt-0">
          <h4 className="font-bold text-md md:text-2xl leading-7 text-center text-black">
            Work schedule
          </h4>
          <div className="footer__workSchedule-text  font-normal text-sm leading-5 text-center text-black mt-2 md:mt-12 md:text-lg">
            <p>Schedule for Call center</p>
            <p>Tuesday - Sunday from 11 to 17</p>
            <p>Physical store - from 11 to 19</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
