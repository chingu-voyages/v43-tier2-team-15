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
          <img src="/src/assets/images/Sample_User_Icon.png" />
          <img src="/src/assets/images/cart-icon.png" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
