import Canvas from "./components/Canvas";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  return (
    <div
      className={`${
        loading ? "w-screen h-screen" : ""
      } flex justify-center items-center`}
    >
      <div className={`w-full ${loading ? "" : "max-w-4xl p-4"}`}>
        {loading ? <Loader /> : <Canvas />}
      </div>
    </div>
  );
}

export default App;
