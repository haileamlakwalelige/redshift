import React, { useState, useEffect } from "react";
import ser1 from "../../assets/pro1.jpg";
import ser2 from "../../assets/pro2.jpg";
import ser3 from "../../assets/pro3.jpg";
import ser4 from "../../assets/pro4.jpg";
import ser5 from "../../assets/pro5.jpg";
import ser6 from "../../assets/pro6.jpg";
import ser7 from "../../assets/pro7.jpg";
import ser8 from "../../assets/pro8.jpg";
import ser9 from "../../assets/pro9.jpg";
import { Link } from "react-router-dom";
import Button from "./button/Button";

function Scroll() {
  const images = [
    { src: ser1, data: "Data for image 1" },
    { src: ser2, data: "Data for image 2" },
    { src: ser3, data: "Data for image 3" },
    { src: ser4, data: "Data for image 4" },
    { src: ser5, data: "Data for image 5" },
    { src: ser6, data: "Data for image 6" },
    { src: ser7, data: "Data for image 7" },
    { src: ser8, data: "Data for image 8" },
    { src: ser9, data: "Data for image 9" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  useEffect(() => {
    setSelectedImage(images[0].src);
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <div
      data-aos="slide-up"
      data-aos-duration="2500"
      className="px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28"
    >
      <div className="flex-col lg:flex-row h-70vh gap-4 md:gap-10 lg:gap-20 xl:gap-28 rounded-lg p-4 flex ">
        <div className="lg:h-[80vh] gap-4 carousel carousel-center lg:carousel-vertical rounded-box">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src)}
                className={`carousel-item block mb-4 cursor-pointer h-[203px] w-[288px] ${
                  selectedImage === image.src ? " rounded-xl" : "rounded"
                }`}
              />
            </div>
          ))}
        </div>
        <div className="data-display">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Image Data"
              className="h-full w-full lg:w-[60vw] max-h-[80vh] rounded-xl"
            />
          )}
        </div>
      </div>
      <Link to="/products" className="flex justify-center items-center">
        <Button type="button" title="Read More" />
      </Link>
    </div>
  );
}

export default Scroll;
