import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Card from "./components/card/Card";
import NavBar from "./components/UI/NavBar";
import WelcomeSection from "./components/Welcome-section/WelcomeSection";
import OffLineShop from "./components/offLine-shop/OffLine-shop";
import Filters from "./components/Layout/Filters";
import WorldDelivery from "./components/World-delivery/WorldDelivery";

function App() {
  return (
    <div className=" font-roboto">
      <Header />
      <NavBar />
      <WelcomeSection />
      <Filters />
      <Card id={6} />
      <WorldDelivery/>
      <OffLineShop />
      <Footer />
    </div>
  );
}

export default App;
