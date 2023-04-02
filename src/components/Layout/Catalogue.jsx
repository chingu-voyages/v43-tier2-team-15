import styles from "./Catalogue.module.css";
import { forwardRef } from "react";

const Catalogue = forwardRef(({}, ref) => {
  return (
    <div className={styles["catalogue-section"]} ref={ref}>
      <div className={styles["catalogue-container"]}>
        <h2>
          <span>
            <img src="/src/assets/images/catalogue-icon.png" />
          </span>
          Catalogue
        </h2>
        <div className={styles["details-container"]}>
          <details>
            <summary>All Categories</summary>
            <p>Lorem</p>
          </details>

          <details>
            <summary>Anime action figures </summary>
            <p>Lorem</p>
          </details>

          <details>
            <summary>Manga </summary>
            <p>Lorem</p>
          </details>

          <details>
            <summary>Plushies </summary>
            <p>Lorem</p>
          </details>
          <details>
            <summary>Ranobe </summary>
            <p>Lorem</p>
          </details>
          <details>
            <summary>Books </summary>
            <p>Lorem</p>
          </details>
          <details>
            <summary>Pajamas</summary>
            <p>Lorem</p>
          </details>

          <details>
            <summary>Art Books</summary>
            <p>Lorem</p>
          </details>
          <details>
            <summary>Cups</summary>
            <p>Lorem</p>
          </details>
          <details>
            <summary>Stickers</summary>
            <p>Lorem</p>
          </details>
          <details>
            <summary> Badges</summary>
            <p>Lorem</p>
          </details>
        </div>
      </div>
    </div>
  );
});

export default Catalogue;
