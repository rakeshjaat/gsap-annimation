import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let second = gsap.timeline({
      scrollTrigger: {
        trigger: ".text_section",
        start: "top top",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    second
      .to(".hero_heading", {
        scale: 3,
        duration: 3,
        autoAlpha: 0,
      })
      .to(".box", {
        rotate: "360deg",
        left: "100%",
      });
  }, []);

  return (
    <div>
      <div style={{ height: "100vh", background: "purple" }}></div>
      <div
        className="text_section"
        style={{
          height: "100vh",
          background: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="hero_heading">Hello</h1>
        <h1 className="box"></h1>
      </div>
      <div style={{ height: "100vh", background: "pink" }}></div>
    </div>
  );
};

export default Hero;
