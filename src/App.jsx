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
    <div className="flex justify-center items-center lg:justify-center lg:items-center">
      <div className="w-full max-w-4xl p-4">
        {loading ? <Loader/> : <Canvas />}
        
      </div>
    </div>
  );
}

export default App;
