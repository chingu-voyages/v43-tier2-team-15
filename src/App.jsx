import Header from "./components/header/Header";
import Footer from "./components/Footer";
import NavBar from "./components/UI/NavBar";
import WelcomeSection from "./components/Welcome-section/WelcomeSection";
import OfflineShop from "./components/offline-shop/OfflineShop";
import WorldDelivery from "./components/World-delivery/WorldDelivery";
import Popular from "./components/PopularItems";

function App() {
  return (
    <div className=" font-roboto bg-[#F6EEDF]">
      <Header />
      <NavBar />
      <WelcomeSection />
      <Popular />
      <WorldDelivery />
      <OfflineShop />
      <Footer />
    </div>
  );
}

export default App;
