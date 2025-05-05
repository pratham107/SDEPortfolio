import Canvas from "./components/Canvas";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import AnimatedCursor from "react-animated-cursor"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  return (
    <>
      <AnimatedCursor 
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />
      <div
      className={`${
        loading ? "w-screen h-screen" : ""
      } flex justify-center items-center`}
    >
      <div className={`w-full ${loading ? "" : "max-w-4xl p-4"}`}>
        {loading ? <Loader /> : <Canvas />}
      </div>
    </div>
    </>
   
  );
}

export default App;
