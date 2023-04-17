import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Card from "./components/card/Card";
import NavBar from "./components/UI/NavBar";
import WelcomeSection from "./components/Welcome-section/WelcomeSection";
import OfflineShop from "./components/offline-shop/OfflineShop";
import Filters from "./components/Layout/Filters";
import WorldDelivery from "./components/World-delivery/WorldDelivery";

function App() {
  return (
    <div className=" font-roboto bg-[#F6EEDF]">
      <Header />
      <NavBar />
      <WelcomeSection />
      <Filters />
      <Card id={6} />
      <WorldDelivery />
      <OfflineShop />
      <Footer />
    </div>
  );
}

export default App;
