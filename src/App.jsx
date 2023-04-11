import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Card from "./components/card/Card";
import NavBar from "./components/UI/NavBar";
import WelcomeSection from "./components/Welcome-section/WelcomeSection";
import OfflineShop from "./components/offline-shop/OfflineShop";
import Filters from "./components/Layout/Filters";
import WorldDelivery from "./components/World-delivery/WorldDelivery";
import ProductItem from "./components/pages/ProductItemPage";

function App() {
  return (
    <div className=" font-roboto">
      <Header />
      <NavBar />
      <WelcomeSection />
      <ProductItem/>
      <main className="min-h-[70vh] px-8 py-16">
        <h2 className="text-2xl underline font-bold py-4 px-0">Page Content</h2>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          ducimus consectetur, veritatis mollitia, voluptates odio suscipit
          sequi magnam provident nobis veniam porro eveniet voluptas placeat
          asperiores sunt ut, voluptatem earum excepturi saepe corporis a
          dolorum unde ex? Magni ut rem aut iste quia. Iste, suscipit sapiente
          quasi odio doloremque nihil libero itaque officiis?{" "}
        </p>
        <p className="py-4">
          Aspernatur repellendus odio eum officiis! Eaque facilis quod sit vero.
          Soluta voluptate praesentium dolorem, quasi officiis voluptatem est
          ipsum nostrum asperiores eos culpa minus. Non facere accusantium
          assumenda veniam itaque sit expedita quos deleniti! Maiores itaque
          eaque, blanditiis ea veritatis saepe incidunt cupiditate tenetur iste
          commodi quasi voluptas nobis suscipit amet eos, placeat facilis quae
          voluptates hic! Error voluptatem, voluptate odio fugit iure voluptas
          sequi atque ex, nemo ducimus ab ad doloribus distinctio recusandae
          nulla pariatur.{" "}
        </p>
        <p className="py-4">
          Rem, facere nemo saepe rerum repellat tempora architecto autem dolores
          animi hic sint maxime velit iste magnam illum eaque officia vel
          recusandae quia eos harum ad id, repudiandae ipsa! Labore quam at sint
          cum qui omnis, aliquam odio iusto dicta neque excepturi deserunt,
          asperiores facere voluptatibus ullam nam, dignissimos maiores soluta
          rem atque error id eaque modi? Dolorem quasi beatae itaque labore,
          pariatur alias sequi magni eius quaerat id saepe, voluptas facere
          nesciunt praesentium ea dolore, hic sit explicabo corrupti ad
          veritatis corporis dolorum non omnis?
        </p>
        <p className="py-4">
          Consequuntur, dicta. Aliquid molestiae, aperiam amet quasi in eligendi
          sed. Harum fugiat id quisquam minus dolorum necessitatibus ducimus
          architecto laudantium perferendis dicta voluptates dignissimos
          expedita quas ipsum, itaque, officia fugit consectetur quo labore
          perspiciatis neque enim est beatae? Aliquid nam laudantium sit in sed
          deleniti, perspiciatis quidem repudiandae quis voluptas.{" "}
        </p>
        <p className="py-4">
          Aut unde totam fuga provident nam, modi cupiditate deserunt, minus
          laudantium iure, sed voluptatem asperiores non harum optio quam
          tempora dolor officiis distinctio ab. Excepturi corporis quaerat
          doloremque nihil sed animi tenetur repellendus sit eligendi labore
          voluptatum ipsum officiis adipisci ipsam, magnam hic velit. Quas
          dignissimos accusantium hic ipsum asperiores! Totam, laboriosam
          voluptatum? Quasi saepe cum iure officiis placeat repellendus,
          possimus est nam ipsum, minima nemo quia fuga ea doloremque. Ea nulla
          nesciunt quibusdam quasi soluta vitae facere voluptas quis, natus
          architecto officiis nostrum dolorum labore obcaecati quisquam quod,
          corrupti eveniet. Laboriosam at soluta iure sed optio omnis nisi non
          nam ipsa ratione alias eveniet excepturi minus nulla neque nesciunt
          beatae, quidem cumque. Maiores doloribus provident, fuga id obcaecati,
          quia magnam esse modi exercitationem eius est. Velit consequuntur
          magni necessitatibus ipsum debitis voluptates quis ex!
        </p>
      </main>
      <Filters />
      <Card id={6} />
      <WorldDelivery />
      <OfflineShop />
      <Footer />
    </div>
  );
}

export default App;
