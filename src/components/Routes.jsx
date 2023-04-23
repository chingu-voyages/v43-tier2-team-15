import { Route, Routes } from "react-router-dom";
import App from "../App";
import ProductList from "./pages/ProductListPage";
import ProductItem from "./pages/ProductItemPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckoutPage";

export default function RoutesList() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/productItem" element={<ProductItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
