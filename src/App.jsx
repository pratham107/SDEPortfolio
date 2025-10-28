import Canvas from "./components/Canvas";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import AnimatedCursor from "react-animated-cursor"
import { useSelector} from "react-redux";
import ScrollIndicator from "./components/ScrollIndicator";


function App() {
  const [loading, setLoading] = useState(true);
  const theme = useSelector((state) => state.theme.theme);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);

  return (
    <>
      <ScrollIndicator />
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
      className={`flex justify-center items-center h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] ${
        loading ? "w-screen h-screen" : ""
      } ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
     
        <div className={`w-full ${loading ? "" : "max-w-4xl p-4"}`}>
          {loading ? <Loader /> : <Canvas theme={theme} />}
      
      </div>
      
    </div>
    </>
    
   
  );
}

export default App;
