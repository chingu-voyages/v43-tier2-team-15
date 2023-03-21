import { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  let pounds = <h1>&pound;</h1>;
  let euros = <h1>&euro;</h1>;
  let dollars = <h1>&#x00024;</h1>;

  const currency = [pounds, euros, dollars];
  const [value, setValue] = useState(1);
  const [isCurrency, setIsCurrency] = useState(currency[0]);

  function flagHandler(e) {
    const flagValue = e.target.value;
    setValue(flagValue);
  }

  function currencyHandler(e) {
    const currencyValue = e.target.value;
    setIsCurrency(currency[currencyValue]);
  }
  return (
    <nav style={{ color: "#d63447" }}>
      <div className={styles["nav-container"]}>
        <img src="/assets/images/logo.png" className={styles.logo} />'
        <div>
          <h1>
            Anime Accessory Shop
            <br /> Otaku's world
          </h1>
        </div>
        <div className={styles.SearchWrapper}>
          <input placeholder="Search..."></input>
          <button>
            <img src="/assets/images/search-icon.png" />
          </button>
        </div>
        <div className={styles.language}>
          <img src={`/assets/image-${value}.png`} />
          <select onChange={flagHandler}>
            <option value={1}> EN </option>
            <option value={2}> ESP </option>
            <option value={3}> DU </option>
            <option value={4}> CHI </option>
          </select>
        </div>
        <div className={styles.currency}>
          <div className={styles.p}> {isCurrency} </div>
          <select onChange={currencyHandler}>
            <option value={0}> Pounds </option>
            <option value={1}> Euros </option>
            <option value={2}> Dollars </option>
          </select>
        </div>
      </div>

      <div className={styles.list}>
        <ul>
          <li>Catalogue</li>
          <li>About</li>
          <li>Wholesale</li>
          <li>Contact</li>
          <li>Our Shop</li>
          <li>Reviews</li>
        </ul>

        <div className={styles.icon}>
          <img src="/assets/images/Sample_User_Icon.png" />
          <img src="/assets/images/cart-icon.png" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
