import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav style={{ color: "#d1cebd" }}>
      <div className={styles.list}>
        <ul>
          <li>Catalogue</li>
          <li>About</li>
          <li>Wholesale</li>
          <li>Contact</li>
          <li>Shop</li>
          <li>Reviews</li>
        </ul>

        <div className={styles.icon}>
          <img src="/src/public/images/Sample_User_Icon.png" />
          <Link to="/cart">
            <img src="/src/public/images/cart-icon.png" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
