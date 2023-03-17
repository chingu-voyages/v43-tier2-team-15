import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1 className="text-3xl font-bold underline text-bonfire text-center pt-8">
          Anime Shop Website
        </h1>
      </div>
    </div>
  );
}

export default App;
