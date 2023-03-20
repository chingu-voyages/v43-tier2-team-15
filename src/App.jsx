import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" font-roboto">
      <div>
        <h1 className="text-3xl font-bold underline text-bonfire text-center pt-8">
          Anime Shop Website
        </h1>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
