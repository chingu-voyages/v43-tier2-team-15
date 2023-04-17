import { Route, Routes } from "react-router-dom";
import App from "../App";
import ProductList from "./pages/ProductListPage";
import ProductItem from "./pages/ProductItemPage";
import Cart from "./pages/Cart";


export default function RoutesList() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products" element={<ProductItem/>}/>
      <Route path="/products" element={<Cart/>}/>
    </Routes>
  );
}
