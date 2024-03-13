// Sliding.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliding.css";

function Sliding() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSize = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, // Show 4 slides initially
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true, // Set right-to-left direction
    nextArrow: null, // Hide next button
    prevArrow: null, // Hide prev button
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on screens between 1024px and 768px
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on screens between 768px and 480px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on screens below 480px
        },
      },
    ],
  };
  
  return (
    <div
      className={`slider-container py-10 ${isExpanded ? "expanded" : ""}`}
      onClick={toggleSize}
    >
      <Slider {...settings}>
        <div>
          <div className="carousel-item mx-3">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[150px] w-[150px]"
            />
          </div>
        </div>
        <div>
          <div className="carousel-item mx-3">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[150px] w-[150px]"
            />
          </div>
        </div>
        <div>
          <div className="carousel-item mx-3">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[150px] w-[150px]"
            />
          </div>
        </div>
        <div>
          <div className="carousel-item mx-3">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[150px] w-[150px]"
            />
          </div>
        </div>
        <div>
          <div className="carousel-item mx-3">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[150px] w-[150px]"
            />
          </div>
        </div>
        <div>
          <div className="carousel-item mx-3">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
              className="h-[150px] w-[150px]"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliding;