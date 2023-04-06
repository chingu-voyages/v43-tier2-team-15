import ReadMore from "../ReadMore";

export default function OfflineShop() {
  return (
    <div
      className="bg-foggy-gray relative"
      style={{ width: "1438px", height: "1020px" }}>
      <p
        className="absolute text-2xl"
        style={{ width: "500px", left: "125px", top: "150px" }}>
        Founded in 2015 in Kyoto, Japan, Otaku’s World has been been a popular
        and well-known for Japanese figures, video games and all sorts of
        otaku-related merchandise. Over the years we have shipped hundreds of
        thousands of items to happy customers around the globe.
        <br />
        <br />
        We are always glad to have new customers and provide them the best
        service and great quality merchandise, our customers deserve all the
        best in this world and we’re forever grateful to have such a supporting
        client-base!
        <br />
      </p>
      <p
        className="absolute text-center text-4xl font-bold"
        style={{ left: "125px", top: "59px" }}>
        Our offline shop
      </p>
      <img
        className="absolute rounded-lg shadow"
        style={{ width: "635px", height: "470px", left: "677px", top: "59px" }}
        src="src/assets/images/offlineMain.png"
        alt="Shop"
      />
      <img
        className="absolute h-52 w-64 rounded-lg shadow"
        style={{ left: "125px", top: "590px" }}
        src="src/assets/images/offlineSide1.png"
        alt="Product"
      />
      <img
        className="absolute h-52 w-64 rounded-lg shadow"
        style={{ left: "434px", top: "590px" }}
        src="src/assets/images/offlineSide2.png"
        alt="Product"
      />
      <img
        className="absolute h-52 w-64 rounded-lg shadow"
        style={{ left: "1054px", top: "590px" }}
        src="src/assets/images/offlineSide3.png"
        alt="Product"
      />
      <img
        className="absolute h-52 w-64 rounded-lg shadow"
        style={{ left: "744px", top: "590px" }}
        src="src/assets/images/offlineSide4.png"
        alt="Product"
      />
      <ReadMore />
    </div>
  );
}
