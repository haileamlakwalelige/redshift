


import React, { useState, useEffect } from "react";
import bg from "../../assets/redbgs.png";

import ser1 from "../../assets/show1.png";
import ser2 from "../../assets/show2.png";
import ser3 from "../../assets/show3.png";
import ser4 from "../../assets/show4.png";

function DetailScroll() {
  const images = [
    { src: ser1, data: "Data for image 1" },
    { src: ser2, data: "Data for image 2" },
    { src: ser3, data: "Data for image 3" },
    { src: ser4, data: "Data for image 4" },
    { src: ser1, data: "Data for image 1" },
    { src: ser2, data: "Data for image 2" },
    { src: ser3, data: "Data for image 3" },
    { src: ser4, data: "Data for image 4" },
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
      style={{ backgroundImage: `url(${bg})` }}
      className="mt-10 bg-cover bg-center bg-no-repeat py-10 px-2 sm:px-6 md:px-16 lg:px-32"
    >
      <div className="flex-col lg:flex-row h-70vh gap-4 lg:gap-20 rounded-lg p-4 flex ">
        <div className="lg:h-[80vh] gap-4 carousel carousel-center lg:carousel-vertical rounded-box">
          {images.map((image, index) => (
            <div key={index} className="carousel-item px-2">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image.src)}
                className={`carousel-item block mb-4 cursor-pointer h-[203px] w-[288px] ${
                  selectedImage === image.src ? " rounded-xl" : ""
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
              className="lg:h-[80vh] h-[50vh] w-full xl:w-[75vw]"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailScroll;
