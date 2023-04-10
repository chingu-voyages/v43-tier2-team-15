import Header from "../header/Header";
import NavBar from "../UI/NavBar";
import Footer from "../Footer";
import Filters from "../Layout/Filters";
import Card from "../card/Card";
import Catalogue from "../Layout/Catalogue";

export default function ProductList() {
  return (
    <div className="product-list-page">
      <Header />
      <NavBar />
      <img className="banner" alt="" src="src/assets/images/banner.png" />
      <Catalogue />
      <Filters />
      <Footer />
    </div>
  );
}
