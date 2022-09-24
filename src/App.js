import logo from "../src/Group8725.png";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Hero from "./component/Hero";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgReff = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const imgg = imgReff.current;
    const img2 = imgRef.current;
    gsap.fromTo(
      imgg,
      {
        ScrollTrigger: {
          trigger: imgg,
        },
        rotation: 0,
        duration: 3,
        scale: 0.5,
      },
      { rotation: 180, duration: 3, scale: 1 }
    );
    gsap.fromTo(
      img2,
      { rotation: 0, duration: 3, scale: 1 },
      { rotation: -180, duration: 2, scale: 0.5 }
    );
  }, []);
  return (
    <div className="App">
      <Hero />
      {/* <div className="vh-100"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" ref={imgReff} />
        <img src={logo} className="App-logo" alt="logo" ref={imgRef} />
      </header> */}
    </div>
  );
}

export default App;
