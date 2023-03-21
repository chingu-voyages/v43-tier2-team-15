import.meta.glob(["../images/**", "../fonts/**"]);
import { useState } from "react";
import NavBar from "./components/UI/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" font-roboto">
      <div>
        <NavBar />
        <h1 className="text-3xl font-bold underline text-bonfire text-center pt-8"></h1>
      </div>
    </div>
  );
}

export default App;
