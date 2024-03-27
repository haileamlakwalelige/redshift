import React, { useState, useEffect } from "react";
import "./style.css";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/4.png";
import img5 from "../../../assets/show1.png";
import img6 from "../../../assets/home10.jpg";

const Slider = () => {
  const [active, setActive] = useState(0);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % items.length);
    }, 3000);

    setRefreshInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const items = [img1, img2, img3, img4, img5, img6];

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1) % items.length);
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 + items.length) % items.length);
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  const reloadSlider = () => {
    clearInterval(refreshInterval);
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % items.length);
    }, 3000);
    setRefreshInterval(interval);
  };

  useEffect(() => {
    reloadSlider();
  }, [active]);

  return (
    <div className="slider min-h-screen w-screen relative">
      <div className="list">
        {items.map((item, index) => (
          <div
            className="item w-screen z-10 relative"
            key={index}
            style={{ display: index === active ? "block" : "none" }}
          >
            <img src={item} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 flex flex-col justify-center px-2 sm:px-4 text-start pt-32 lg:pt-72 lg:px-10 items-start text-white z-20 lg:mt-[20px]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
              }}
            >
              <p className="text-[26px] md:text-[30px] lg:text-[36px] font-extrabold text-center mb-4">
                Revolutionizing Mobility for a Sustainable Future
              </p>
              <p className="text-[16px] font-light md:text-base text-start lg:w-3/4 ">
                Our company, Redshift, is where innovation meets sustainability
                to reshape Ethiopia's transportation landscape. We are not just
                a manufacturer of motor vehicles; we are pioneers of change,
                driven by a mission to promote eco-friendly solutions, reduce
                carbon emissions, and propel economic growth.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons absolute top-4 left-0 right-0 flex justify-between px-4 z-30">
        <button id="prev" onClick={prevSlide}>
          {"<"}
        </button>
        <button id="next" onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <ul className="dots absolute bottom-4 left-0 right-0 flex justify-center z-20">
        {items.map((_, index) => (
          <li
            key={index}
            className={index === active ? "active text-primary" : " text-white"}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
