import React, { useState, useEffect } from "react";
// import "../home/style.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";

const DetailView = () => {
  const [active, setActive] = useState(0);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % items.length);
    }, 3000);

    setRefreshInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const items = [img1, img2, img3, img4];

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
    <div className="slider max-h-[70vh] w-screen my-10">
      <div className="list">
        {items.map((item, index) => (
          <div
            className="item w-screen z-10 "
            key={index}
            style={{ display: index === active ? "block" : "none" }}
          >
            <img src={item} alt="" className="w-full h-[50vh] object-cover" />
          </div>
        ))}
      </div>
      <div className="buttons left-0 right-0 flex justify-between px-4 z-30">
        <button id="prev" onClick={prevSlide}>
          {"<"}
        </button>
        <button id="next" onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <ul className="dots bottom-4 left-0 right-0 flex justify-center z-20">
        {items.map((_, index) => (
          <li
            key={index}
            className={index === active ? "active" : ""}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default DetailView;
