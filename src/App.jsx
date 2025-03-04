import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }
        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="scroll-container">
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen  font-[Helvetica]">
        {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas details={canvasdets} key={index} />
          ))}
        <div className="w-full h-screen relative z-[1] ">
          <nav className="w-full p-6 flex justify-between z-50">
            <div className="brand text-2xl font-regular ">Thirtysixstudio</div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md ! !no-underline hover:text-gray-300"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[25%]">
            <div className="text w-[50%]">
              <h3 className="text-3xl leading-[1.2]">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="text-md w-[80%] mt-7 font-normal">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="text-md mt-4">Scroll</p>
            </div>
          </div>

          <div className="w-full relative top-4 bottom-0 left-0 ">
            <h1
              ref={headingref}
              className="text-[13.5rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="relative z-[1]">
          <h1 className="text-6xl tracking-tighter">About the Brand</h1>
          <p className="text-3xl leading-[1.6] w-[80%] mt-10 font-normal ">
            We're a boutique production studio focused on design, animation, and
            technology, constantly rethinking what digital craft can do for
            present-day ads and campaigns.
          </p>
          <img
            className="w-[45%] mt-10"
            src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
            alt="im"
          />
        </div>
      </div>

      <div className="w-full absolute h-screen  mt-32 px-10">
        {showCanvas &&
          data[2].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="relative z-[1] mt-56">
          <div className="flex flex-row gap-24 px-10">
            <h1 className="text-3xl tracking-tighter w-[400px] p-10">
              01 - What We Do
            </h1>
            <div className="ml-48 w-[40%]">
              <p className="text-2xl leading-[1.1] w-[85%] mt-10 font-normal ">
                We aim to elevate digital production in the advertising space,
                bringing your ideas to life.
              </p>
              <p className="text-md leading-[1.2] w-[75%] mt-64 font-normal mb-20 ">
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver current digital work.{" "}
                <br />
                <br />
                Our commitment to innovation and simplicity, paired with our
                agile approach, ensures your journey with us is smooth and
                enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
      

      OUR SERVICES

    </div>
  );
}

export default App;
